export interface GetParams {
  slug: string;
}

export interface PaginatorInfo<T> {
  results: T[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export interface QueryOptions {
  sortBy?: string;
  projectBy?: string;
  populate?: string;
  limit?: number;
  page?: number;
}

export interface LoginInput {
  username: string;
  password: string;
}

interface TokenPayload {
  token: string;
  expires: Date;
}

export interface AccessAndRefreshTokens {
  access: TokenPayload;
  refresh: TokenPayload;
}

export interface User {
  username: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  tokens: AccessAndRefreshTokens;
}

export interface RegisterInput {
  username: string;
  role: string;
  password: string;
}

export interface ResetPasswordInput {
  resetPasswordToken: any;
  newPassword: string;
}

export interface ForgetPasswordInput {
  username: string;
}

// SERVICE

export interface Service {
  name: string;
  isActive: boolean;
  id: string;
}

export interface ServiceInput {
  name: string;
  isActive: boolean;
}

export interface ServiceQueryOptions extends QueryOptions {}
export interface ServicePaginator extends PaginatorInfo<Service> {}

// SERVICE Provider
export interface ServiceProvider {
  id?: string;
  name: string;
  serviceType: string;
  isActive: boolean;
}

export interface ServiceProviderInput {
  name: string;
  serviceType: string;
  isActive: boolean;
}

export interface ServiceProviderQueryOptions extends QueryOptions {}
export interface ServiceProviderPaginator
  extends PaginatorInfo<ServiceProvider> {}

// Client

export interface AssignedServiceProvider {
  name: string | undefined;
  isActive: boolean;
  serviceProvider: string;
}

export interface AssignedServiceProviderInput {
  isActive: boolean;
  serviceProvider: string;
  name: string;
}

export interface Client {
  id?: string;
  name: string;
  assignedServiceProviders: AssignedServiceProvider[];
}

export interface ClientInput {
  name: string;
  assignedServiceProviders: AssignedServiceProviderInput[];
}

export interface ClientQueryOptions extends QueryOptions {}
export interface ClientPaginator extends PaginatorInfo<Client> {}
