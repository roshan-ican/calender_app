/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '@/data/auth';
import {
  allowedRoles,
  hasAccess,
  setAuthCredentials,
} from '@/utils/auth-utils';
import { useRouter } from 'next/router';

const Login = () => {
  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();
  const { mutate: login, isLoading, error } = useLogin();
  const router = useRouter();
  const onSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    login(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          if (data?.tokens) {
            setAuthCredentials(data?.tokens);
            router.push('/');
            console.log('Sign in Success');
            return;
          } else {
          }
        },
        onError: () => {},
      }
    );
  };

  return (
    <>
      <div className="flex min-h-screen flex-1">
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            src="https://neokredwebsite.s3.ap-south-1.amazonaws.com/svg/neokred_logo.svg"
            alt=""
            className="w-50  top-8 left-12  absolute z-10"
          />
          <img
            className="absolute inset-0 h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt=""
          />
        </div>
        <div
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="text"
                        autoComplete="email"
                        required
                        {...register('username')}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        {...register('password')}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
