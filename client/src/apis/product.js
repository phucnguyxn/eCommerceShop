import useHttpRequest from 'hooks/useHttpRequest';

export const apiGetProducts = (params) =>
  useHttpRequest({
    url: '/product/',
    method: 'get',
    params,
  });

export const apiGetProduct = (pid) =>
  useHttpRequest({
    url: '/product/' + pid,
    method: 'get',
  });

export const apiRatings = (data) =>
  useHttpRequest({
    url: '/product/ratings',
    method: 'put',
    data,
  });

export const apiCreateProduct = (data) =>
  useHttpRequest({
    url: '/product/',
    method: 'post',
    data,
  });

export const apiUpdateProduct = (data, pid) =>
  useHttpRequest({
    url: '/product/' + pid,
    method: 'put',
    data,
  });

export const apiDeleteProduct = (pid) =>
  useHttpRequest({
    url: '/product/' + pid,
    method: 'delete',
  });

export const apiAddVarriant = (data, pid) =>
  useHttpRequest({
    url: '/product/varriant/' + pid,
    method: 'put',
    data,
  });

export const apiCreateOrder = (data) =>
  useHttpRequest({
    url: '/order/',
    method: 'post',
    data,
  });

export const apiGetOrders = (params) =>
  useHttpRequest({
    url: '/order/admin',
    method: 'get',
    params,
  });

export const apiGetUserOrders = (params) =>
  useHttpRequest({
    url: '/order/',
    method: 'get',
    params,
  });
