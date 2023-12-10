import { get } from 'lodash';

export const getAccessToken = () => {
  if (typeof window !== undefined) {
    const userData = JSON.parse(
      window.localStorage.getItem('persist:shop/user'),
    );
    if (userData) {
      return get(userData, 'token');
    }
    return null;
  }
};
