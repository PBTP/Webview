import CMCalendar from '@/components/common/Calendar/Calendar';
import styles from './Index.module.scss';
import Button from '@/components/common/Button/Button';
import { useEffect, useState } from 'react';
import { IReservation } from '@/interfaces/reservation';
import { requestAPI } from '@/utils/fetch';

const ReservationIndexPage = () => {
  const [times, setTimes] = useState<IReservation>();
  const fetchs = async () => {
    const res = await requestAPI().get('/time');
    console.log(res.data);
    setTimes(res.data);
  };
  const fetch2 = async () => {
    const res = await requestAPI().get('/todos');
    console.log(res);
  };

  const handleIosButton = () => {
    alert('AccessToten');
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.buttonClicked
    ) {
      window.webkit.messageHandlers.buttonClicked.postMessage('프론트엔드');
    }
  };

  const iOSToJavaScript = (token: string) => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.buttonClicked
    ) {
      window.webkit.messageHandlers.buttonClicked.postMessage(token);
    }
  };

  useEffect(() => {
    fetchs();
    fetch2();
  }, []);

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
        <Button onClick={handleIosButton} buttonType="Gray">
          취소
        </Button>
        <Button buttonType="Primary">다음</Button>
      </div>
    </div>
  );
};

export default ReservationIndexPage;
