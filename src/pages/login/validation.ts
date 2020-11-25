import { FormikErrors } from 'formik';
import { LoginFormValues } from './types';

const hasDigit = (value: string) => /\d/.test(value);
const hasUpperCaseLetter = (value: string) => /[A-Z]/g.test(value);

export const validateLoginForm = (values: LoginFormValues) => {
  const errors: FormikErrors<LoginFormValues> = {};
  if (
    values.password.length < 8 ||
    !hasDigit(values.password) ||
    !hasUpperCaseLetter(values.password)
  ) {
    errors.password =
      'Password should contain at least: 8 characters, 1 number and 1 upper character!';
  }
  return errors;
};
