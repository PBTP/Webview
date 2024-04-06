import { http, HttpResponse } from 'msw';
import { reservationAPIList } from './solve';

export const handlers = [
  // Handles a POST /login request
  http.post('/login', null),

  // Handles a GET /user request
  http.get('/reservation-able-time', reservationAPIList.getAbleTimes),
  // http.get('/reservation-able-time', (req, res, ctx) => {
  //   return HttpResponse.json({
  //     am: [
  //       {
  //         time: '10:00',
  //         able: true,
  //       },
  //       {
  //         time: '10:30',
  //         able: true,
  //       },
  //       {
  //         time: '11:00',
  //         able: true,
  //       },
  //       {
  //         time: '11:30',
  //         able: false,
  //       },
  //     ],
  //     pm: [
  //       {
  //         time: '12:00',
  //         able: true,
  //       },
  //       {
  //         time: '12:30',
  //         able: true,
  //       },
  //       {
  //         time: '1:00',
  //         able: true,
  //       },
  //       {
  //         time: '2:00',
  //         able: false,
  //       },
  //     ],
  //   });
  // }),

  http.get('/todos', reservationAPIList.getAbleTimes),
];
