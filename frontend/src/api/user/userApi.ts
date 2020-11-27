import { AxiosInstance } from 'axios';
import { LoginApiRequestPayload, UserApiResponse } from './types';

export class UserApi {
  private readonly instance: AxiosInstance;

  public constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async login(email: string, password: string): Promise<UserApiResponse> {
    const payload: LoginApiRequestPayload = { email, password };
    const response = await this.instance.post<UserApiResponse>('/login', payload);
    return response.data;
  }
}
