import useHttpRequest from 'hooks/useHttpRequest';

export const apiGetBrands = (params) =>
  useHttpRequest({
    url: '/brand/',
    method: 'get',
    params,
  });

export const apiGetBrand = (pid) =>
  useHttpRequest({
    url: '/brand/' + pid,
    method: 'get',
  });

export const apiCreateBrand = (data) =>
  useHttpRequest({
    url: '/brand/',
    method: 'post',
    data,
  });

export const apiUpdateBrand = (data, pid) =>
  useHttpRequest({
    url: '/brand/' + pid,
    method: 'put',
    data,
  });

export const apiDeleteBrand = (pid) =>
  useHttpRequest({
    url: '/brand/' + pid,
    method: 'delete',
  });
