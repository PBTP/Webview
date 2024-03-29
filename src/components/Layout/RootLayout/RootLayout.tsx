import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.RootLayout}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
