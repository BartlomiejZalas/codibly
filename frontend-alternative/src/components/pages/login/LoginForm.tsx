import React, { useContext, useState } from 'react';
import useIsMounted from 'ismounted';
import { styled, TextField, Typography, withStyles } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useFormik } from 'formik';
import { ErrorCode } from '../../../constants/errorCodes';
import { UserStoreContext } from '../../../stores/user/userStoreContext';
import ButtonWithProgress from '../../ui/ButtonWithProgress';
import { mapCodeToMessage, mapToErrorCode } from '../../../utils/errors';
import { LoginFormValues } from './types';
import { validateLoginForm } from './validation';

const Form = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ButtonContainer = styled('div')({
  width: '50%',
  margin: 'auto',
});

const ErrorMessage = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    background: theme.palette.error.main,
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1, 2),
    borderRadius: 4,
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
  },
}))(Typography);

const ErrorIcon = withStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
  },
}))(ErrorOutlineIcon);

const initialValues = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const userStore = useContext(UserStoreContext);
  const [errorCode, setErrorCode] = useState<ErrorCode | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    setIsLoading(true);
    try {
      await userStore.login(email, password);
    } catch (e) {
      setErrorCode(mapToErrorCode(e));
    }
    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  const formik = useFormik<LoginFormValues>({
    initialValues,
    validate: validateLoginForm,
    onSubmit,
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
