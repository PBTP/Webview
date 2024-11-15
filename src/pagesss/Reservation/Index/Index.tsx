import Button from '@/components/ui/common/Button/Button';
import CMCalendar from '@/components/ui/common/Calendar/Calendar';
import { IReservation } from '@/types/reservation';
import { useState } from 'react';
import styles from './Index.module.scss';

/**
 * TODO: TimeWrap 컴포넌트 분리하여 재사용 가능하게 만들기
 * @returns
 */
const ReservationIndexPage = () => {
  const [times, setTimes] = useState<IReservation>();

  return (
    <div>
      <div className={styles.Title}>예약 스케쥴</div>
      <CMCalendar />
      <div className={`Divider Reservation`} />
      <div className={styles.Title}>오전</div>
      <div className={styles.TimeWrap}>
        {times?.am?.map((item, index) => (
          <Button
            key={index}
            buttonType={item.able ? 'White' : 'TimeDisabled'}
            className={styles.TimeButton}
          >
            {item.time}
          </Button>
        ))}
      </div>
      <div className={styles.Title}>오후</div>
      <div className={styles.TimeWrap}>
        {times?.pm?.map((item, index) => (
          <Button
            key={index}
            buttonType={item.able ? 'White' : 'TimeDisabled'}
            className={styles.TimeButton}
          >
            {item.time}
          </Button>
        ))}
      </div>
      <div className={styles.NavigateWrap}>
        <Button buttonType="Gray">취소</Button>
        <Button buttonType="Primary">다음</Button>
      </div>
    </div>
  );
};

export default ReservationIndexPage;
