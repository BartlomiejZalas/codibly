import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { fetchLogin } from '../../redux/reducers/user/actions';
import { AppDispatch } from '../../redux/store';
import { LoginFormValues } from './types';
import { validateLoginForm } from './validation';

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(2)}px;
    margin-bottom: ${theme.spacing(2)}px;
    align-self: center;
    width: 50%;
  `}
`;

const initialValues = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<LoginFormValues>({
    initialValues,
    validate: validateLoginForm,
    onSubmit: async (values: LoginFormValues) => {
      dispatch(fetchLogin(values.email, values.password));
      formik.setSubmitting(false);
    },
  });

  const emailHasError = formik.touched.email && !!formik.errors.email;
  const passwordHasError = formik.touched.password && !!formik.errors.password;

  return (
    <Form>
      <TextField
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
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => formik.handleSubmit()}
        disabled={!formik.values.password || !formik.values.email || formik.isSubmitting}
      >
        Login
      </StyledButton>
    </Form>
  );
};

export default LoginForm;
