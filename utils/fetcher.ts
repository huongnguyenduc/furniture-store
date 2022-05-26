import axios from 'axios';

export function axiosFetcher(endpoint = '/', method = 'GET', body = {}, cookie: any = false) {
  return axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookie ? `Bearer ${cookie}` : cookie,
    },
  })
    .then((res) => res.data)
    .catch((error) => error.response.data);
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
