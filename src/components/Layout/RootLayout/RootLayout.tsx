import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { logout, setAccessToken, useTokenStore } from '@/stores/useTokenStore';

const RootLayout = () => {
  const token = useTokenStore((state) => state.accessToken);
  const handleToken = () => {
    logout();
    setAccessToken('');
  };
  return (
    <div className={styles.RootLayout}>
      <div>token: {token}</div>
      <div>
        <button onClick={handleToken}>토큰값 삭제</button>
        <button onClick={() => setAccessToken('TOKEN')}>토큰값 입력</button>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
