import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

/**
 * 개발환경에서만 실행해줍니다.
 */
// if (process.env.NEXT_PUBLICDEV) {
//   await initMocks();
// }

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
