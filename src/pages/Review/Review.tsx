import { DeleteXIcon } from '@/icons/icon';
import styles from './Review.module.scss'

const ReviewPage = () => {
  return (
    <>
      <div className={styles.ReviewHeader}>
        <DeleteXIcon width={14} height={14} />
        <div className={styles.ReviewTitle}>리뷰 작성</div>
        <div className={styles.ReviewHiddenElement}>Hidden</div>
      </div>
    </>
  );
}

export default ReviewPage;