import axios from 'axios';
import { API_URL } from '../constants/urls';
import { UserApi } from './user/userApi';

class Api {
  readonly user: UserApi;

  constructor() {
    const instance = axios.create({ baseURL: API_URL });
    this.user = new UserApi(instance);
  }
}

export const api = new Api();
