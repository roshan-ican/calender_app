import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';
import {
  LoginInput,
  AuthResponse,
  RegisterInput,
  ResetPasswordInput,
  ForgetPasswordInput,
} from '@/types';

export const authClient = {
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, variables);
  },
  logout: () => {
    return HttpClient.post<any>(API_ENDPOINTS.LOGOUT, {});
  },
  register: (variables: RegisterInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, variables);
  },
  resetPassword: (variables: ResetPasswordInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.RESET_PASSWORD, variables);
  },
  forgetPassword: (variables: ForgetPasswordInput) => {
    return HttpClient.post<any>(API_ENDPOINTS.FORGOT_PASSWORD, variables);
  },
};
