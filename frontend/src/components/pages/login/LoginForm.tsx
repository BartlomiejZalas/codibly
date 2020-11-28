import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { fetchLogin } from '../../../redux/reducers/user/actions';
import { AppDispatch, useTypedSelector } from '../../../redux/store';
import ButtonWithProgress from '../../ui/ButtonWithProgress';
import { mapCodeToMessage } from '../../../utils/errors';
import { LoginFormValues } from './types';
import { validateLoginForm } from './validation';

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const ErrorMessage = styled(Typography)`
  ${(props: { theme: Theme }) => `
    color: ${props.theme.palette.common.white};
    background: ${props.theme.palette.error.main};
    margin: ${props.theme.spacing()}px 0;
    padding: ${props.theme.spacing()}px  ${props.theme.spacing(2)}px;
    border-radius: 4px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  `}
`;

const ErrorIcon = styled(ErrorOutlineIcon)`
  ${(props: { theme: Theme }) => `
    margin-right: ${props.theme.spacing(2)}px;
  `}
`;

const initialValues = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const errorCode = useTypedSelector((state) => state.user.loginErrorCode);
  const isLoading = useTypedSelector((state) => state.user.isLoading);

  const formik = useFormik<LoginFormValues>({
    initialValues,
    validate: validateLoginForm,
    onSubmit: ({ email, password }) => {
      dispatch(fetchLogin(email, password));
    },
  });

  const emailHasError = formik.touched.email && !!formik.errors.email;
  const passwordHasError = formik.touched.password && !!formik.errors.password;

  return (
    <Form>
      {errorCode && (
        <ErrorMessage>
          <ErrorIcon fontSize="small" />
          {mapCodeToMessage(errorCode)}
        </ErrorMessage>
      )}
      <TextField
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        margin="normal"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={emailHasError}
        helperText={emailHasError && formik.errors.email}
      />
      <TextField
        id="password"
        label="Password"
        name="password"
        variant="outlined"
        type="password"
        margin="normal"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={passwordHasError}
        helperText={passwordHasError && formik.errors.password}
      />
      <ButtonContainer>
        {formik.isSubmitting}
        <ButtonWithProgress
          variant="contained"
          color="primary"
          onClick={() => formik.handleSubmit()}
          disabled={!formik.isValid || !formik.values.email}
          isLoading={isLoading}
          data-testid="login--submit-btn"
        >
          Login
        </ButtonWithProgress>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
