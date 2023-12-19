import { apiGetOrders, apiGetUserOrders } from "apis"
import { CustomSelect, InputForm, Pagination } from "components"
import withBaseComponent from "hocs/withBaseComponent"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { createSearchParams, useSearchParams } from "react-router-dom"
import { statusOrders } from "utils/contants"

const History = ({ navigate, location }) => {
  const [orders, setOrders] = useState(null)
  const [counts, setCounts] = useState(0)
  const [params] = useSearchParams()
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm()
  const q = watch("q")
  const status = watch("status")
  const fetchPOrders = async (params) => {
    const response = await apiGetUserOrders({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    })
    if (response.success) {
      setOrders(response.orders)
      setCounts(response.counts)
    }
  }
  useEffect(() => {
    const pr = Object.fromEntries([...params])
    fetchPOrders(pr)
  }, [params])

  const handleSearchStatus = ({ value }) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ status: value }).toString(),
    })
  }

  console.log(orders)

  return (
    <div className="w-full relative px-4">
      <header className="text-3xl font-semibold py-4 border-b border-b-blue-200">
        Đơn hàng
      </header>
      <div className="flex justify-end items-center px-4">
        <form className="w-[45%] grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <InputForm
              id="q"
              register={register}
              errors={errors}
              fullWidth
              placeholder="Tìm kiếm đơn hàng theo trạng thái,..."
            />
          </div>
          <div className="col-span-1 flex items-center">
            <CustomSelect
              options={statusOrders}
              value={status}
              onChange={(val) => handleSearchStatus(val)}
              wrapClassname="w-full"
            />
          </div>
        </form>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="border bg-sky-900 text-white border-white">
            <th className="px-4 py-2">STT</th>
            <th className="px-4 py-2">Sản phẩm</th>
            <th className="px-4 py-2">Thành tiền</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2">Ngày mua</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((el, idx) => (
            <tr className="border-b" key={el._id}>
              <td className="text-center py-2">
                {(+params.get("page") > 1 ? +params.get("page") - 1 : 0) *
                  process.env.REACT_APP_LIMIT +
                  idx +
                  1}
              </td>
              <td className="text-center max-w-[500px] py-2">
                <span className="grid gap-4 text-center py-2">
                  {el.products?.map((item) => (
                    <span
                      className="flex col-span-1 items-center gap-2"
                      key={item._id}
                    >
                      <img
                        src={item.thumbnail}
                        alt="thumb"
                        className="w-8 h-8 rounded-md object-cover"
                      />
                      <span className="flex flex-col">
                        <span className="text-main text-sm">{item.title}</span>
                        <span className="flex items-center text-xs gap-2">
                          <span>Số lượng:</span>
                          <span className="text-main">{item.quantity}</span>
                        </span>
                      </span>
                    </span>
                  ))}
                </span>
              </td>
              <td className="text-center py-2">{el.total + " 💲"}</td>
              <td className="text-center py-2">{el.status}</td>
              <td className="text-center py-2">
                {moment(el.createdAt)?.format("DD/MM/YYYY")}
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

export default withBaseComponent(History)
