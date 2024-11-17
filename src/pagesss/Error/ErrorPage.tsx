import { ErrorLogoIcon } from '@/components/ui/icons/logo';
import styles from './Error.module.scss';

interface ErrorProps {
  type?: 'notFound' | 'error';
}

const ErrorPage = ({ type = 'error' }: ErrorProps) => {
  const errorType = {
    notFound: '페이지를 찾을 수 없습니다.',
    error: '비정상적인 접근입니다.',
  };
  return (
    <div className={styles.ErrorWrapper}>
      <ErrorLogoIcon width={66} height={64} />
      <div className={styles.ErrorContent}>
        <div className={styles.ErrorTitle}>불편을 드려 죄송합니다</div>
        <div>{errorType[type]}</div>
        <div>잠시후, 다시 시도해 주세요.</div>
      </div>
    </div>
  );
};

export default ErrorPage;
