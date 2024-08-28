import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

const RootLayout = () => {
  const { accessToken, uuid } = useAuthStore((state) => state);
  return (
    <div className={styles.RootLayout}>
      <div>
        <div>Token: {accessToken}</div>
        <div>uuid: {uuid}</div>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
