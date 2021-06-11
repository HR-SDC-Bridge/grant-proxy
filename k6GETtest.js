import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:4000';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 1000,
      maxVUs: 1000,
    },
  },
};

export default function () {

  let id = Math.floor(Math.random() * 10000000);

  let responses = http.batch([
    ['GET', `${BASE_URL}/api/sizes/${id}`, null, { tags: { ctype: `product id ${id}` } }]
  ]);
  check(responses[0], {
    [`product id ${id} status was 200`]: (res) => res.status === 200,
  });
}