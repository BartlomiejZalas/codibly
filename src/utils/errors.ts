import { ErrorCode } from '../constants/errorCodes';

export const mapToErrorCode = (e: Error) => {
  // TODO add more cases
  return ErrorCode.GENERAL_HTTP_ERROR;
};

export const mapCodeToMessage = (e: ErrorCode) => {
  switch (e) {
    case ErrorCode.CREDENTIALS_INCORRECT:
      return 'Incorrect login or password!';
    default:
    case ErrorCode.GENERAL_HTTP_ERROR:
      return 'Something went wrong!';
  }
};
