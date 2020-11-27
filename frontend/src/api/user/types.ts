export interface UserApiResponse {
  userId: number;
  email: string;
}

export interface LoginApiRequestPayload {
  email: string;
  password: string;
}
