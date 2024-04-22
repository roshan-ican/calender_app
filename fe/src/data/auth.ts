import { AUTH_CRED } from '@/utils/constants';
import { Routes } from '@/config/routes';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './client/api-endpoints';
import { authClient } from './client/auth';

export function useLogin() {
  return useMutation(authClient.login);
}

export const useLogoutMutation = () => {
  const router = useRouter();

  return useMutation(authClient.logout, {
    onSuccess: () => {
      Cookies.remove(AUTH_CRED);
      router.replace(Routes.login);
      toast.success('User successfully logged out');
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authClient.register, {
    onSuccess: () => {
      toast.success('Successfully Registered');
    },
    // Always refetch after error or success:
    onSettled: () => {},
  });
};

export const useForgetPasswordMutation = () => {
  return useMutation(authClient.forgetPassword);
};

export const useResetPasswordMutation = () => {
  return useMutation(authClient.resetPassword);
};
