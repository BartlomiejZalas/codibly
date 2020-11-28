import React from 'react';
import { render, cleanup, fireEvent, waitFor, screen } from '@testing-library/react';
import { mockLogin } from '../../utils/tests/http-mocks';
import { Scope } from 'nock';
import { TestWrapperBuilder } from '../../utils/tests/TestWrapperBuilder';
import Pages from '../../components/pages/Pages';

const renderApp = () => {
  const wrapper = new TestWrapperBuilder().withStoreProvider().withThemeProvider().build();
  render(<Pages />, { wrapper });

  return {
    assert: {
      text: (text: string) => ({
        isVisible: () => expect(screen.getByText(text)).toBeInTheDocument(),
      }),
      requestIsDone: async (request: Scope) => {
        await waitFor(() => {
          expect(request.isDone()).toBe(true);
        });
      },
    },
    act: {
      blur: (label: string) => fireEvent.blur(screen.getByLabelText(label)),
      clickSend: () => fireEvent.click(screen.getByTestId('login--submit-btn')),
      clickLogout: () => fireEvent.click(screen.getByText('logout')),
      waitUntilTextDisplayed: async (text: string) => await screen.findByText(text),
      type: (label: string, value: string) =>
        fireEvent.change(screen.getByLabelText(label), { target: { value } }),
    },
  };
};

describe('login and logout', () => {
  afterEach(cleanup);

  it('should allow user to login and logout', async () => {
    const { act, assert } = renderApp();

    const loginRequest = mockLogin(
      (body) => {
        expect(body.email).toBe('correc@email.com');
        expect(body.password).toBe('correctPassword1');
        return true;
      },
      { userId: 1, email: 'correc@email.com' }
    );

    assert.text('Welcome to example website.').isVisible();
    act.type('Email', 'correc@email.com');
    act.type('Password', 'correctPassword1');

    act.clickSend();

    await assert.requestIsDone(loginRequest);
    await act.waitUntilTextDisplayed('Secret Page');

    assert.text('Secret Page').isVisible();
    assert.text('Hello!').isVisible();

    act.clickLogout();

    assert.text('Welcome to example website.').isVisible();
  });

  it('should validate password', async () => {
    const { act, assert } = renderApp();

    assert.text('Welcome to example website.').isVisible();
    act.type('Email', 'correc@email.com');
    act.type('Password', 'incorrectPassword');
    act.blur('Password');

    await act.waitUntilTextDisplayed(
      'Password should contain at least: 8 characters, 1 number and 1 upper character!'
    );

    assert
      .text('Password should contain at least: 8 characters, 1 number and 1 upper character!')
      .isVisible();
  });

  it('should display error on failed request', async () => {
    const { act, assert } = renderApp();

    const loginRequest = mockLogin(
      (body) => {
        expect(body.email).toBe('correc@email.com');
        expect(body.password).toBe('correctPassword1');
        return true;
      },
      undefined,
      500
    );

    assert.text('Welcome to example website.').isVisible();
    act.type('Email', 'correc@email.com');
    act.type('Password', 'correctPassword1');

    act.clickSend();

    await act.waitUntilTextDisplayed('Something went wrong!');
    assert.text('Something went wrong!').isVisible();
    await assert.requestIsDone(loginRequest);
  });
});
