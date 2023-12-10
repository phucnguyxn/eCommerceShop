import { replace } from 'lodash';

export const getAccessToken = () => {
  if (typeof window !== undefined) {
    const userData = JSON.parse(
      window.localStorage.getItem('persist:shop/user'),
    );
    if (userData) {
      return replace(`Bearer ${userData?.token}`, /\"/g, '');
    }
    return null;
  }
};
