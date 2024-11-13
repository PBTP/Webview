import type { Metadata } from 'next';
import Providers from './provider';
import '@/styles/global.scss';
import TokenInjection from '@/components/Layout/RootLayout/RootLayout';

export const metadata: Metadata = {
  title: 'Mongle',
  description: 'Mongle Webview',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <TokenInjection>{children}</TokenInjection>
        </Providers>
      </body>
    </html>
  );
}
