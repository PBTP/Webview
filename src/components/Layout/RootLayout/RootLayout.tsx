'use client';

import React, { Suspense } from 'react';
import styles from './RootLayout.module.scss';
import { useAuthStore } from '@/stores/useAuthStore';
import { showiOSInfo, webviewInit } from '@/webview/utils';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/pagesss/Error/ErrorPage';
import LoadingSpinner from '@/pagesss/Loading/LoadingSpinner';
import Cookies from 'js-cookie';

type TokenInjectionProps = {
  children: React.ReactNode;
};

const TokenInjection = ({ children }: TokenInjectionProps) => {
  const { accessToken, uuid } = useAuthStore((state) => state);
  const cookieToken = Cookies.get('AUTH');
  const allCookies = Cookies.get();
  const maskToken = (token: string | null) => {
    if (!token) return '';
    if (token.length <= 12) return token;

    const prefix = token.slice(0, 6);
    const suffix = token.slice(-6);
    return `${prefix}...${suffix}`;
  };
  
  return (
    <div className={styles.RootLayout}>
      <div>
        <div className={styles.Token}>Token: {maskToken(accessToken)}</div>
        <div className={styles.Token}>CookieToken: {cookieToken || '없음'}</div>
        <div className={styles.Token}>allCookie: {JSON.stringify(allCookies) || '올쿠키'}</div>
        <div>uuid: {uuid}</div>
        <button onClick={() => showiOSInfo(`${accessToken},uuid:${uuid}`)}>
          확인
        </button>
        <button onClick={webviewInit}>초기설정</button>
      </div>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TokenInjection;
