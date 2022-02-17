import { fetchOptions, FETCH_METHOD } from './types';

export const createFetchOptions = () => {
  const getBooksOptions = (): fetchOptions => {
    return {
      method: FETCH_METHOD.GET,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
  };

  return {
    getBooksOptions,
  };
};
