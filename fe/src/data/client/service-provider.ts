import { crudFactory } from '@/data/client/curd-factory';

import { API_ENDPOINTS } from '@/data/client/api-endpoints';
import { QueryOptions, ServiceProvider, ServiceProviderInput } from '@/types';

export const serviceProviderClient = {
  ...crudFactory<ServiceProvider, QueryOptions, ServiceProviderInput>(
    API_ENDPOINTS.SERVICE_PROVIDER
  ),
};
