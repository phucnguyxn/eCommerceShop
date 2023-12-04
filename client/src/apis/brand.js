import axios from "../axios"

export const apiGetBrands=(params)=>
axios({
    url:"/brand/",
    method:"get",
    params,
})

export const apiGetBrand = (pid) =>
  axios({
    url: "/brand/" + pid,
    method: "get",
  })

export const apiCreateBrand = (data) =>
  axios({
    url: "/brand/",
    method: "post",
    data,
  })

export const apiUpdateBrand = (data, pid) =>
  axios({
    url: "/brand/" + pid,
    method: "put",
    data,
  })

export const apiDeleteBrand = (pid) =>
  axios({
    url: "/brand/" + pid,
    method: "delete",
  })
