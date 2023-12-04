import { InputForm, Select, Button, Loading } from 'components'
import React, { memo, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { validate } from 'ultils/helpers'
import { toast } from 'react-toastify'
import { apiUpdateBrand } from 'apis'
import { showModal } from 'store/categories/categorySlice'
import { useSelector, useDispatch } from 'react-redux'

const UpdateBrand = ({ editBrand, render, setEditBrand }) => {
    const { categories } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()

    const [payload, setPayload] = useState({
    });

    useEffect(() => {
        reset({
            title: editBrand?.title || '',
            brand: editBrand?.brand?.toLowerCase() || '',
        })
    }, [editBrand])

    const handleUpdateBrand = async (data) => {
        const invalids = validate(payload)
        if (invalids === 0) {
            const finalPayload = { ...data, ...payload };
            const formData = new FormData();
            for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1]);
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
            const response = await apiUpdateBrand(formData);
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
                <h1 className='text-3xl font-bold tracking-tight'>Update brands</h1>
                <span className='text-main hover:underline cursor-pointer' onClick={() => setEditBrand(null)} >Cancel</span>
            </div>
            <div className='p-4'>
                <form onSubmit={handleSubmit(handleUpdateBrand)}>
                    <InputForm
                        label='Name brand'
                        register={register}
                        errors={errors}
                        id='title'
                        validate={{
                            required: 'Need fill this field'
                        }}
                        fullWidth
                        placeholder='Name of new brand'
                    />
                    <div className='w-full my-6 flex gap-4'>
                        <Select
                            label='Brand'
                            options={categories?.find(el => el.title === watch('brand'))?.brand?.map(el => ({ code: el.toLowerCase(), value: el }))}
                            register={register}
                            id='brand'
                            style='flex-auto'
                            errors={errors}
                            fullWidth
                        />
                    </div>
                    <div className='my-6'><Button type='submit'>Update new brand</Button></div>
                </form>
            </div>
        </div>
    )
}

export default memo(UpdateBrand)