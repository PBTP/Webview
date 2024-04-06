import CMCalendar from '@/components/common/Calendar/Calendar';
import styles from './Index.module.scss';
import Button from '@/components/common/Button/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IReservation } from '@/interfaces/reservation';
/**
 * TODO
 * 버튼 태그는 추후 msw를 연결하여 map으로 순회한다
 * @returns
 */
const ReservationIndexPage = () => {
  const [times, setTimes] = useState<IReservation>();

  const fetchData = async () => {
    const res = await axios.get('/reservation-able-time');
    console.log(res);
    if (res.status === 200) {
      setTimes(res.data);
    }
  };

  const secondeFetch = async () => {
    const res = await axios.get('/todos');
    console.log(res);
  };

  useEffect(() => {
    fetchData();
    // setTimeout(async () => {
    //   const res = await axios.get('/reservation-able-time');
    //   console.log(res);
    //   if (res.status === 200) {
    //     setTimes(res.data);
    //   }
    // }, 3000);
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
        <Button buttonType="Gray">취소</Button>
        <Button buttonType="Primary">다음</Button>
      </div>
    </div>
  );
};

export default ReservationIndexPage;
