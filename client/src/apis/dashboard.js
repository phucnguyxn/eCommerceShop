import useHttpRequest from 'hooks/useHttpRequest';

export const getOverviewNumbers = () =>
  useHttpRequest({
    url: '/dashboard/overview-numbers',
    method: 'GET',
  });
