import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.module.scss';
import { ArrowIcon } from './icons/icon';
import { Value } from 'node_modules/react-calendar/dist/cjs/shared/types';

const CMCalendar = () => {
  const [date, setDate] = useState<Value>(new Date()); // 현재 날짜로 초기화

  const onChange = (selectedDate: Value) => {
    setDate(selectedDate);
  };
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    // 오늘 이전의 날짜를 다르게 스타일링합니다.
    if (view === 'month' && date < new Date() && !isSameDay(date, new Date())) {
      return 'past-date';
    }
    return '';
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={date}
        calendarType="gregory"
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        tileClassName={tileClassName}
        prevLabel={
          <ArrowIcon width={20} height={20} stroke="#8B95A1" fill="none" />
        }
        nextLabel={
          <ArrowIcon width={20} height={20} stroke="black" fill="none" />
        }
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        showNeighboringMonth={false}
      />
    </>
  );
};

export default CMCalendar;
