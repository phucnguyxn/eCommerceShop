import useHttpRequest from 'hooks/useHttpRequest';

export const apiRegister = (data) =>
  useHttpRequest({
    url: '/user/register',
    method: 'post',
    data,
  });
export const apiFinalRegister = (token) =>
  useHttpRequest({
    url: '/user/finalregister/' + token,
    method: 'put',
  });
export const apiLogin = (data) =>
  useHttpRequest({
    url: '/user/login',
    method: 'post',
    data,
  });
export const apiForgotPassword = (data) =>
  useHttpRequest({
    url: '/user/forgotpassword',
    method: 'post',
    data,
  });
export const apiResetPassword = (data) =>
  useHttpRequest({
    url: '/user/resetpassword',
    method: 'put',
    data,
  });
export const apiGetCurrent = () =>
  useHttpRequest({
    url: '/user/current',
    method: 'get',
  });
export const apiGetUsers = (params) =>
  useHttpRequest({
    url: '/user/',
    method: 'get',
    params,
  });
export const apiUpdateUser = (data, uid) =>
  useHttpRequest({
    url: '/user/' + uid,
    method: 'put',
    data,
  });
export const apiDeleteUser = (uid) =>
  useHttpRequest({
    url: '/user/' + uid,
    method: 'delete',
  });
export const apiUpdateCurrent = (data) =>
  useHttpRequest({
    url: '/user/current',
    method: 'put',
    data,
  });
export const apiUpdateCart = (data) =>
  useHttpRequest({
    url: '/user/cart',
    method: 'put',
    data,
  });
export const apiRemoveCart = (pid, color) =>
  useHttpRequest({
    url: `/user/remove-cart/${pid}/${color}`,
    method: 'delete',
  });
export const apiUpdateWishlist = (pid) =>
  useHttpRequest({
    url: `/user/wishlist/` + pid,
    method: 'put',
  });
