import Router, { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Routes } from '@/config/routes';
import { API_ENDPOINTS } from './client/api-endpoints';
import {
  GetParams,
  ServiceProvider,
  QueryOptions,
  ServiceProviderQueryOptions,
  ServiceProviderPaginator,
} from '@/types';
import { serviceProviderClient } from '@/data/client/service-provider';

export const useCreateServiceProviderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(serviceProviderClient.create, {
    onSuccess: async () => {
      toast.success('ServiceProvider Created Successfully');
    },
    // Always refetch after error or success:
    onSettled: () => {
      //   queryClient.invalidateQueries({
      //     : API_ENDPOINTS.SERVICE_PROVIDER,
      //   });
    },
  });
};

export const useDeleteServiceProviderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(serviceProviderClient.delete, {
    onSuccess: () => {
      toast.success('ServiceProvider Deleted Successfully');
    },
    // Always refetch after error or success:
    onSettled: () => {
      //   queryClient.invalidateQueries(API_ENDPOINTS.SERVICE_PROVIDER);
    },
  });
};

export const useUpdateServiceProviderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(serviceProviderClient.update, {
    onSuccess: () => {
      toast.success('ServiceProvider Updated Successfully');
    },
    // Always refetch after error or success:
    onSettled: () => {
      //   queryClient.invalidateQueries(API_ENDPOINTS.SERVICE_PROVIDER);
    },
  });
};

export const useServiceProviderQuery = ({ slug }: GetParams) => {
  const { data, error, isLoading } = useQuery<ServiceProvider, Error>(
    [API_ENDPOINTS.SERVICE_PROVIDER, { slug }],
    () => serviceProviderClient.get({ slug })
  );

  return {
    serviceProvider: data,
    error,
    loading: isLoading,
  };
};

export const useServiceProvidersQuery = (
  options?: Partial<ServiceProviderQueryOptions>
) => {
  const { data, error, isLoading } = useQuery<ServiceProviderPaginator, Error>(
    [API_ENDPOINTS.SERVICE_PROVIDER, options],
    ({ queryKey, pageParam }) =>
      serviceProviderClient.paginated(
        Object.assign({}, queryKey[1], pageParam)
      ),
    {
      keepPreviousData: true,
    }
  );

  return {
    serviceProviders: (data && data?.results) ?? [],
    // paginatorInfo: mapPaginatorData(data),
    error,
    loading: isLoading,
  };
};
