import type { Metadata } from 'next';
import Providers from './provider';
// import '@/styles/globals.scss';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
