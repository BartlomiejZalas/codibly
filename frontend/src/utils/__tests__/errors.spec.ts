import { ErrorCode } from '../../constants/errorCodes';
import { mapCodeToMessage, mapToErrorCode } from '../errors';

const AxiosErrorMock = (status: number) => ({ isAxiosError: true, response: { status } });

describe('error utils', () => {
  describe('mapToErrorCode', () => {
    it.each`
      error                  | expectedCode
      ${new Error()}         | ${ErrorCode.GENERAL_HTTP_ERROR}
      ${AxiosErrorMock(401)} | ${ErrorCode.CREDENTIALS_INCORRECT}
      ${AxiosErrorMock(400)} | ${ErrorCode.GENERAL_HTTP_ERROR}
      ${AxiosErrorMock(500)} | ${ErrorCode.GENERAL_HTTP_ERROR}
    `('should return $expectedCode when error is $error', ({ expectedCode, error }) => {
      expect(mapToErrorCode(error)).toBe(expectedCode);
    });
  });

  describe('mapCodeToMessage', () => {
    it.each`
      code                               | message
      ${ErrorCode.CREDENTIALS_INCORRECT} | ${'Incorrect login or password!'}
      ${ErrorCode.GENERAL_HTTP_ERROR}    | ${'Something went wrong!'}
    `('should return $message when error code is $code', ({ code, message }) => {
      expect(mapCodeToMessage(code)).toBe(message);
    });
  });
});
