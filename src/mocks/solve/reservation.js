import { HttpResponse } from 'msw';

const getAbleTimes = () => {
  return HttpResponse.json({
    am: [
      {
        time: '10:00',
        able: true,
      },
      {
        time: '10:30',
        able: true,
      },
      {
        time: '11:00',
        able: true,
      },
      {
        time: '11:30',
        able: false,
      },
    ],
    pm: [
      {
        time: '12:00',
        able: true,
      },
      {
        time: '12:30',
        able: true,
      },
      {
        time: '1:00',
        able: true,
      },
      {
        time: '2:00',
        able: false,
      },
    ],
  });
};

export const reservationAPIList = {
  getAbleTimes,
};
