import useHttpRequest from 'hooks/useHttpRequest';

export const getOverviewNumbers = () =>
  useHttpRequest({
    url: '/dashboard/overview-numbers',
    method: 'GET',
  });

export const getBestSellers = (limit) =>
  useHttpRequest({
    url: `/dashboard/best-sellers?limit=${limit}`,
    method: 'GET',
  });

export const getRevenueAnalytic = (timeRangeType) =>
  useHttpRequest({
    url: `/dashboard/revenue-analytic?timeRangeType=${timeRangeType}`,
    method: 'GET',
  });
