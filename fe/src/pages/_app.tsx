import { useState } from 'react';
import '@/styles/globals.css';
// import '@/assets/css/main.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

const Noop: React.FC<{ children: JSX.Element }> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
            <>
            <Layout {...pageProps}>
                  <Component {...pageProps} />
                </Layout>
              <ToastContainer autoClose={2000} theme="colored" position="bottom-center" />
            </>
        <ReactQueryDevtools position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}
