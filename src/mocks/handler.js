import { http } from 'msw';

export const handlers = [
  // Handles a POST /login request
  http.post('/login', null),

  // Handles a GET /user request
  http.get('/user', null),
];
