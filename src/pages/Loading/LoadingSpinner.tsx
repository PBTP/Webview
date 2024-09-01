import Lottie from 'lottie-react';
import spinnerData from './mongleloading.json';
import styles from './Loading.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.LoadingSpinnerWrapper}>
      <Lottie loop={true} animationData={spinnerData} />
    </div>
  );
};

export default LoadingSpinner;
