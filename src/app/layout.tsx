import type { Metadata } from 'next';
import Providers from './provider';

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
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <title>몽글</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
