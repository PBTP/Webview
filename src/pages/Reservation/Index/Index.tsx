import CMCalendar from '@/components/common/Calendar/Calendar';
import styles from './Index.module.scss';
import Button from '@/components/common/Button/Button';
/**
 * TODO
 * 버튼 태그는 추후 msw를 연결하여 map으로 순회한다
 * @returns
 */
const ReservationIndexPage = () => {
  return (
    <div>
      <div className={styles.Title}>예약 스케쥴</div>
      <CMCalendar />
      <div className={styles.DividerWrap}>
        <div className="Divider" />
      </div>
      <div className={styles.Title}>오전</div>
      <div className={styles.TimeWrap}>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
        <Button buttonType="White" className={styles.TimeButton}>
          10:00
        </Button>
      </div>
      <div className={styles.Title}>오후</div>
      <div className={styles.TimeWrap}>
        <Button buttonType="TimeActive" className={styles.TimeButton}>
          12:00
        </Button>
        <Button buttonType="TimeActive" className={styles.TimeButton}>
          12:00
        </Button>
        <Button buttonType="TimeActive" className={styles.TimeButton}>
          12:00
        </Button>
        <Button buttonType="TimeActive" className={styles.TimeButton}>
          12:00
        </Button>
        <Button buttonType="TimeDisabled" className={styles.TimeButton}>
          12:00
        </Button>
        <Button buttonType="TimeDisabled" className={styles.TimeButton}>
          12:00
        </Button>
      </div>
      <div className={styles.NavigateWrap}>
        <Button buttonType="Gray">취소</Button>
        <Button buttonType="Primary">다음</Button>
      </div>
    </div>
  );
};

export default ReservationIndexPage;
