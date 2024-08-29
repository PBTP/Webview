import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import initMocks from '@/mocks/index.js';
import App from './App';

/**
 * 개발환경에서만 실행해줍니다.
 */
if (import.meta.env.DEV) {
  await initMocks();
}

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
