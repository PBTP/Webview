import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';
import { showiOSInfo } from '@/webview/utils';
import { Counter } from '@repo/ui/counter';

const RootLayout = () => {
  const { accessToken, uuid } = useAuthStore((state) => state);
  return (
    <div className={styles.RootLayout}>
      <div>
        <div>Token: {accessToken}</div>
        <div>uuid: {uuid}</div>
        <button onClick={() => showiOSInfo(`${accessToken},uuid:${uuid}`)}>
          확인
        </button>
        ${Counter()}
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
