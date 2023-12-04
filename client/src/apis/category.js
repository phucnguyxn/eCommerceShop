import axios from "../axios"

export const apiGetCategories = (params) =>
  axios({
    url: "/prodcategory/",
    method: "get",
    params,
  })

export const apiGetCategory = (pid) =>
  axios({
    url: "/prodcategory/" + pid,
    method: "get",
  })

export const apiCreateCategory = (data) =>
  axios({
    url: "/prodcategory/",
    method: "post",
    data,
  })

export const apiUpdateCategory = (data, pid) =>
  axios({
    url: "/prodcategory/" + pid,
    method: "put",
    data,
  })

export const apiDeleteCategory = (pid) =>
  axios({
    url: "/prodcategory/" + pid,
    method: "delete",
  })
