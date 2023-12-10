import { InputForm, Select, Button, Loading } from 'components'
import React, { memo, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { validate } from 'utils/helpers'
import { toast } from 'react-toastify'
import { apiUpdateCategory } from 'apis'
import { showModal } from 'store/categories/categorySlice'
import { useSelector, useDispatch } from 'react-redux'

const UpdateCategory = ({ editCategory, render, setEditCategory }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [payload, setPayload] = useState({
    });

    useEffect(() => {
        reset({
            title: editCategory?.title || ''
        })
    }, [editCategory])

    const handleUpdateCategory = async (data) => {
        const invalids = validate(payload)
        if (invalids === 0) {
            const finalPayload = { ...data, ...payload };
            const formData = { ...editCategory }
            for (let i of Object.entries(finalPayload)) formData[i[0]] = i[1];
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
            const response = await apiUpdateCategory(formData);
            if (response.success) {
                toast.success(response.mes);
                reset();
            } else toast.error(response.mes);
        }
    }
    return (
        <div className='w-full flex flex-col gap-4 relative'>
            <div className='h-[69px] w-full'></div>
            <div className='p-4 border-b bg-gray-100 flex justify-between items-center right-0 left-[327px] fixed top-0'>
                <h1 className='text-3xl font-bold tracking-tight'>Cập nhật danh mục</h1>
                <span className='text-main hover:underline cursor-pointer' onClick={() => setEditCategory(null)} >Hủy</span>
            </div>
            <div className='p-4'>
                <form onSubmit={handleSubmit(handleUpdateCategory)}>
                    <InputForm
                        label='Tên danh mục'
                        register={register}
                        errors={errors}
                        id='title'
                        validate={{
                            required: 'Không được để trống'
                        }}
                        fullWidth
                        placeholder='Tên danh mục'
                    />
                    <div className='my-6'><Button type='submit'>Cập nhật</Button></div>
                </form>
            </div>
        </div>
    )
}

export default memo(UpdateCategory)
