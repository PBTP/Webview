import { rest } from 'msw';
import { reservationAPIList } from './api';

export function handlers() {
  return [rest.get('/time', reservationAPIList.getTimes)];
}
