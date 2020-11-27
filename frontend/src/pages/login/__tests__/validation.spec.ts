import { validateLoginForm } from '../validation';

describe('validation', () => {
  describe('validateLoginForm', () => {
    it.each`
      password      | expectedError
      ${''}         | ${true}
      ${'a'}        | ${true}
      ${'A'}        | ${true}
      ${'1'}        | ${true}
      ${'abcdefg'}  | ${true}
      ${'12345678'} | ${true}
      ${'abcdefgh'} | ${true}
      ${'ABCDFEGH'} | ${true}
      ${'Abcdefg1'} | ${false}
      ${'ABCDEFG1'} | ${false}
      ${'abcABC12'} | ${false}
    `('should validate password "$password"', ({ password, expectedError }) => {
      const errors = validateLoginForm({ email: 'any string', password });
      expect(!!errors.password).toBe(expectedError);
    });
  });
});
