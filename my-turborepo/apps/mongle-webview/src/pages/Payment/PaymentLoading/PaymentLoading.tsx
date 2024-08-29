import React from 'react';
import styles from './PaymentLoading.module.scss';

const PaymentLoading = () => {
  return (
    <div className={styles.PaymentLoadingWrapper}>
      <div>안전하게 결제를 진행중입니다.</div>
      <div>잠시만 기다려주세요.</div>
      <div>로딩 스피너</div>
    </div>
  );
};

export default PaymentLoading;
