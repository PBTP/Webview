import '@/styles/global.scss';
import type { Metadata } from 'next';
import Providers from './provider';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mongle',
    description: 'Mongle Webview',
  };
}

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
