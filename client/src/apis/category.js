import useHttpRequest from 'hooks/useHttpRequest';

export const apiGetCategories = (params) =>
  useHttpRequest({
    url: '/prodcategory/',
    method: 'get',
    params,
  });

export const apiGetCategory = (pid) =>
  useHttpRequest({
    url: '/prodcategory/' + pid,
    method: 'get',
  });

export const apiCreateCategory = (data) =>
  useHttpRequest({
    url: '/prodcategory/',
    method: 'post',
    data,
  });

export const apiUpdateCategory = (data, pid) =>
  useHttpRequest({
    url: '/prodcategory/' + pid,
    method: 'put',
    data,
  });

export const apiDeleteCategory = (pid) =>
  useHttpRequest({
    url: '/prodcategory/' + pid,
    method: 'delete',
  });
