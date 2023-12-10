import React, { useCallback, useEffect, useState } from "react"
import { InputForm, Pagination } from "components"
import { useForm } from "react-hook-form"
import { apiGetBrands, apiDeleteBrand } from "apis"
import moment from "moment"
import {
    useSearchParams,
    createSearchParams,
    useNavigate,
    useLocation,
} from "react-router-dom"
import useDebounce from "hooks/useDebounce"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import { BiEdit } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import UpdateBrand from "./UpdateBrand"

const ManageBrands = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [params] = useSearchParams()
    const {
        register,
        formState: { errors },
        watch,
    } = useForm()
    const [brands, setBrands] = useState([])
    const [counts, setCounts] = useState(0)
    const [editBrand, setEditBrand] = useState(null)
    const [update, setUpdate] = useState(false)
    const [customizeVarriant, setCustomizeVarriant] = useState(null)

    const render = useCallback(() => {
        setUpdate(!update)
    })

    const fetchBrands = async (params) => {
        const response = await apiGetBrands({
            ...params,
            limit: process.env.REACT_APP_LIMIT,
        })
        if (response.success) {
            setCounts(response.counts)
            setBrands(response.brands)
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
        fetchBrands(searchParams)
    }, [params, update])

    const handleDeleteBrand = (pid) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure remove this brand",
            icon: "warning",
            showCancelButton: true,
        }).then(async (rs) => {
            if (rs.isConfirmed) {
                const response = await apiDeleteBrand(pid)
                if (response.success) toast.success(response.mes)
                else toast.error(response.mes)
                render()
            }
        })
    }

    return (
        <div className="w-full flex flex-col gap-4 relative">
            {editBrand && (
                <div className="absolute inset-0 min-h-screen bg-gray-100 z-50">
                    <UpdateBrand
                        editBrand={editBrand}
                        render={render}
                        setEditBrand={setEditBrand}
                    />
                </div>
            )}
            <div className="h-[69px] w-full"></div>
            <div className="p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0">
                <h1 className="text-3xl font-bold tracking-tight">Quản lý Brands</h1>
            </div>
            <div className="flex justify-end items-center px-4">
                <form className="w-[45%]">
                    <InputForm
                        id="q"
                        register={register}
                        errors={errors}
                        fullWidth
                        placeholder="Search brands by title"
                    />
                </form>
            </div>
            <table className="table-auto">
                <thead>
                    <tr className="border bg-sky-900 text-white border-white">
                        <th className="text-center py-2">Tiêu đề</th>
                        <th className="text-center py-2">Đã tạo lúc</th>
                        <th className="text-center py-2">Cập nhật lúc</th>
                    </tr>
                </thead>
                <tbody>
                    {brands?.map((el, idx) => (
                        <tr className="border-b" key={el._id}>
                            <td className="text-center py-2">
                                {(+params.get("page") > 1 ? +params.get("page") - 1 : 0) *
                                    process.env.REACT_APP_LIMIT +
                                    idx +
                                    1}
                            </td>
                            <td className="text-center py-2">{el.title}</td>
                            <td className="text-center py-2">
                                {moment(el.createdAt).format("DD/MM/YYYY")}
                            </td>
                            <td className="text-center py-2">
                                {moment(el.updateAt).format("DD/MM/YYYY")}
                            </td>
                            <td className="text-center py-2">
                                <span
                                    onClick={() => setEditBrand(el)}
                                    className="text-blue-500 hover:text-orange-500 inline-block hover:underline cursor-pointer px-1"
                                >
                                    <BiEdit size={20} />
                                </span>
                                <span
                                    onClick={() => handleDeleteBrand(el._id)}
                                    className="text-blue-500 hover:text-orange-500 inline-block hover:underline cursor-pointer px-1"
                                >
                                    <RiDeleteBin6Line size={20} />
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

export default ManageBrands
