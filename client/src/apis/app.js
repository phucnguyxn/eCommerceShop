import useHttpRequest from 'hooks/useHttpRequest';

export const apiGetCategories = () =>
  useHttpRequest({
    url: '/prodcategory/',
    method: 'get',
  });
