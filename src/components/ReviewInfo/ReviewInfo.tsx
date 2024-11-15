import { DeleteXIcon } from '@/components/ui/icons/icon';
import styles from './ReviewInfo.module.scss';

/**
 * 해당 정보는 추후에 props로 받아서 반려동물 정보를 보여준다.
 * @returns
 */
const ReviewInfo = () => {
  return (
    <>
      <div className={styles.ReviewHeader}>
        <DeleteXIcon width={14} height={14} />
        <div className={styles.ReviewTitle}>리뷰 작성</div>
        <div className={styles.ReviewHiddenElement}>Hidden</div>
      </div>
      <div className={styles.ReviewInfoWrapper}>
        <img src="https://files.oaiusercontent.com/file-QWhzafquTQgIbQAxCN55c7Fb?se=2024-07-08T12%3A30%3A13Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da66f388d-ca05-4bcd-8a16-75efe21af6ca.webp&sig=RxcAL4vIVVWa3oO8CBWUMvgprnuGHebHYU6D/Tp6TT4%3D" />
        <div className={styles.ReviewInfo}>
          <div className={styles.ReviewInfoTitle}>개신남 10호점</div>
          <div className={styles.ReviewInfoPuppyInfo}>
            김뽀삐 | 중형견 | 장모종
          </div>
          <div className={styles.ReviewInfoDate}>2024.04.06(토) 오후 1:00</div>
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
