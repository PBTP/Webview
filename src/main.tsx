import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootRouter } from './router/RootRouter';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  </React.StrictMode>
);
