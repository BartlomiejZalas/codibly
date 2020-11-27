import { AxiosError } from 'axios';
import { ErrorCode } from '../constants/errorCodes';

const isAxiosError = (error: any): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};

export const mapToErrorCode = (e: AxiosError | Error): ErrorCode => {
  if (isAxiosError(e) && e.response) {
    switch (e.response.status) {
      case 401:
        return ErrorCode.CREDENTIALS_INCORRECT;
      case 400:
      default:
        return ErrorCode.GENERAL_HTTP_ERROR;
    }
  } else {
    return ErrorCode.GENERAL_HTTP_ERROR;
  }
};

export const mapCodeToMessage = (e: ErrorCode): string => {
  switch (e) {
    case ErrorCode.CREDENTIALS_INCORRECT:
      return 'Incorrect login or password!';
    default:
    case ErrorCode.GENERAL_HTTP_ERROR:
      return 'Something went wrong!';
  }
};
