import React, { useCallback, useEffect, useState } from "react"
import { CustomizeVarriants, InputForm, Pagination } from "components"
import { useForm } from "react-hook-form"
import { apiGetProducts, apiDeleteProduct } from "apis/product"
import moment from "moment"
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom"
import useDebounce from "hooks/useDebounce"
import UpdateProduct from "./UpdateProduct"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import { BiEdit, BiCustomize } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import clsx from "clsx"

const ManageProducts = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [params] = useSearchParams()
  const {
    register,
    formState: { errors },
    watch,
  } = useForm()
  const [products, setProducts] = useState(null)
  const [counts, setCounts] = useState(0)
  const [editProduct, setEditProduct] = useState(null)
  const [update, setUpdate] = useState(false)
  const [customizeVarriant, setCustomizeVarriant] = useState(null)

  const render = useCallback(() => {
    setUpdate(!update)
  })

  const fetchProducts = async (params) => {
    const response = await apiGetProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    })
    if (response.success) {
      setCounts(response.counts)
      setProducts(response.products)
    }
  }
  const queryDecounce = useDebounce(watch("q"), 800)
  useEffect(() => {
    if (queryDecounce) {
      navigate({
        pathname: location.pathname,
        search: createSearchParams({ q: queryDecounce }).toString(),
      })
    } else
      navigate({
        pathname: location.pathname,
      })
  }, [queryDecounce])

  useEffect(() => {
    const searchParams = Object.fromEntries([...params])
    fetchProducts(searchParams)
  }, [params, update])

  const handleDeleteProduct = (pid) => {
    Swal.fire({
      title: "Bạn có chắc không?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const response = await apiDeleteProduct(pid)
        if (response.success) toast.success(response.mes)
        else toast.error(response.mes)
        render()
      }
    })
  }

  return (
    <div className={clsx('w-full pl-16')}>
      {editProduct && (
        <div className="absolute inset-0 min-h-screen bg-gray-100 z-50">
          <UpdateProduct
            editProduct={editProduct}
            render={render}
            setEditProduct={setEditProduct}
          />
        </div>
      )}
      {customizeVarriant && (
        <div className="absolute inset-0 min-h-screen bg-gray-100 z-50">
          <CustomizeVarriants
            customizeVarriant={customizeVarriant}
            render={render}
            setCustomizeVarriant={setCustomizeVarriant}
          />
        </div>
      )}
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Quản lý sản phẩm</h1>
      </div>
      <div className="flex justify-end items-center px-4">
        <form className="w-[45%]">
          <InputForm
            id="q"
            register={register}
            errors={errors}
            fullWidth
            placeholder="Tìm kiếm theo tên, thương hiệu,..."
          />
        </form>
      </div>
      <table className="table-auto mb-6 text-left w-full">
        <thead>
          <tr className="border bg-sky-900 text-white border-white">
            <th className="px-4 py-2">STT</th>
            <th className="px-4 py-2">Tên sản phẩm</th>
            <th className="px-4 py-2">Thương hiệu</th>
            <th className="px-4 py-2">Danh mục</th>
            <th className="px-4 py-2">Giá</th>
            <th className="px-4 py-2">Số lượng</th>
            <th className="px-4 py-2">Đã bán</th>
            <th className="px-4 py-2">Màu sắc</th>
            <th className="px-4 py-2">Đánh giá</th>
            <th className="px-4 py-2">Cập nhật lúc</th>
            <th className="px-4 py-2">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((el, idx) => (
            <tr className="border-b" key={el._id}>
              <td className="px-4 py-2">
                {(+params.get("page") > 1 ? +params.get("page") - 1 : 0) *
                  process.env.REACT_APP_LIMIT +
                  idx +
                  1}
              </td>
              <td className="px-4 py-2">{el.title}</td>
              <td className="px-4 py-2">{el.brand}</td>
              <td className="px-4 py-2">{el.category}</td>
              <td className="px-4 py-2">{el.price}</td>
              <td className="px-4 py-2">{el.quantity}</td>
              <td className="px-4 py-2">{el.sold}</td>
              <td className="px-4 py-2">{el.color}</td>
              <td className="px-4 py-2">{el.totalRatings}</td>
              <td className="px-4 py-2">
                {moment(el.createdAt).format("DD/MM/YYYY")}
              </td>
              <td className="text-center py-2">
                <span
                  onClick={() => setEditProduct(el)}
                  className="text-blue-500 hover:text-orange-500 inline-block hover:underline cursor-pointer px-1"
                >
                  <BiEdit size={20} />
                </span>
                <span
                  onClick={() => handleDeleteProduct(el._id)}
                  className="text-blue-500 hover:text-orange-500 inline-block hover:underline cursor-pointer px-1"
                >
                  <RiDeleteBin6Line size={20} />
                </span>
                <span
                  onClick={() => setCustomizeVarriant(el)}
                  className="text-blue-500 hover:text-orange-500 inline-block hover:underline cursor-pointer px-1"
                >
                  <BiCustomize size={20} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end my-8">
        <Pagination totalCount={counts} />
      </div>
    </div>
  )
}

export default ManageProducts
