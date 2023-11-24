import React, { useCallback, useState, useEffect } from 'react'
import { InputForm, Select, Button, MarkdownEditor, Loading } from 'components'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { validate, getBase64 } from 'ultils/helpers'
import { toast } from 'react-toastify'
import { apiCreateProduct } from 'apis'
import { showModal } from 'store/app/appSlice'


const CreateProducts = () => {
    const { categories } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const { register, formState: { errors }, reset, handleSubmit, watch } = useForm()

    const [payload, setPayload] = useState({
        description: ''
    })
    const [preview, setPreview] = useState({
        thumb: null,
        images: []
    })
    const [invalidFields, setInvalidFields] = useState([])
    const changeValue = useCallback((e) => {
        setPayload(e)
    }, [payload])
    const [hoverElm, setHoverElm] = useState(null)
    const handlePreviewThumb = async (file) => {
        const base64Thumb = await getBase64(file)
        setPreview(prev => ({ ...prev, thumb: base64Thumb }))
    }
    const handlePreviewImages = async (files) => {
        const imagesPreview = []
        for (let file of files) {
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                toast.warning('Tệp không được hỗ trợ!')
                return
            }
            const base64 = await getBase64(file)
            imagesPreview.push({ name: file.name, path: base64 })
        }
        setPreview(prev => ({ ...prev, images: imagesPreview }))

    }
    useEffect(() => {
        handlePreviewThumb(watch('thumb')[0])
    }, [watch('thumb')])
    useEffect(() => {
        handlePreviewImages(watch('images'))
    }, [watch('images')])

    const handleCreateProduct = async (data) => {
        const invalids = validate(payload, setInvalidFields)
        if (invalids === 0) {
            if (data.category) data.category = categories?.find(el => el._id === data.category)?.title
            const finalPayload = { ...data, ...payload }
            const formData = new FormData()
            for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1])
            if (finalPayload.thumb) formData.append('thumb', finalPayload.thumb[0])
            if (finalPayload.images) {
                for (let image of finalPayload.images) formData.append('images', image)
            }
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }))
            const response = await apiCreateProduct(formData)
            dispatch(showModal({ isShowModal: false, modalChildren: null }))
            if (response.success) {
                toast.success(response.mes)
                reset()
                setPayload({
                    thumb: '',
                    image: []
                })
            } else toast.error(response.mes)
        }
    }
    return (
        <div className='w-full'>
            <h1 className='h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b'>
                <span>Tạo Sản Phẩm Mới</span>
            </h1>
            <div className='p-4'>
                <form onSubmit={handleSubmit(handleCreateProduct)}>
                    <InputForm
                        label='Tên Sản Phẩm'
                        register={register}
                        errors={errors}
                        id='title'
                        validate={{
                            required: 'Không được để trống!'
                        }}
                        fullWidth
                        placeholder='Tên sản phẩm'
                    />
                    <div className='w-full my-6 flex gap-4'>
                        <InputForm
                            label='Giá'
                            register={register}
                            errors={errors}
                            id='price'
                            validate={{
                                required: 'Không được để trống!'
                            }}
                            style='flex-auto'
                            placeholder='Giá của sản phẩm'
                            type='number'
                        />
                        <InputForm
                            label='Số Lượng'
                            register={register}
                            errors={errors}
                            id='quantity'
                            validate={{
                                required: 'Không được để trống!'
                            }}
                            style='flex-auto'
                            placeholder='Số lượng của sản phẩm'
                            type='number'
                        />
                        <InputForm
                            label='Màu Sắc'
                            register={register}
                            errors={errors}
                            id='color'
                            validate={{
                                required: 'Không được để trống!'
                            }}
                            style='flex-auto'
                            placeholder='Màu sắc của sản phẩm'
                        />
                    </div>
                    <div className='w-full my-6 flex gap-4'>
                        <Select
                            label='Danh Mục'
                            options={categories?.map(el => ({ code: el._id, value: el.title }))}
                            register={register}
                            id='category'
                            validate={{ required: 'Không được để trống!' }}
                            style='flex-auto'
                            errors={errors}
                            fullWidth
                        />
                        <Select
                            label='Thương Hiệu'
                            options={categories?.find(el => el._id === watch('category'))?.brand?.map(el => ({ code: el, value: el }))}
                            register={register}
                            id='brand'
                            style='flex-auto'
                            errors={errors}
                            fullWidth
                        />
                    </div>
                    <MarkdownEditor
                        name='Mô Tả'
                        changeValue={changeValue}
                        label='Mô Tả'
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                    />
                    <div className='flex flex-col gap-2 mt-8'>
                        <label className='font-semibold' htmlFor="thumb">Upload thumb</label>
                        <input
                            type="file"
                            id="thumb"
                            {...register('thumb', { required: 'Need fill' })}
                        />
                        {errors['thumb'] && <small className='text-xs text-red-500'>{errors['thumb']?.message}</small>}
                    </div>
                    {preview.thumb && <div className='my-4'>
                        <img src={preview.thumb} alt="thumbnail" className='w-[200px] object-contain' />
                    </div>}
                    <div className='flex flex-col gap-2 mt-8'>
                        <label className='font-semibold' htmlFor="products">Tải lên hình sản phẩm</label>
                        <input
                            type="file"
                            id="products"
                            multiple
                            {...register('images', { required: 'Need fill' })}
                        />
                        {errors['images'] && <small className='text-xs text-red-500'>{errors['images']?.message}</small>}
                    </div>
                    {preview.images.length > 0 && <div className='my-4 flex w-full gap-3 flex-wrap'>
                        {preview.images?.map((el, idx) => (
                            <div
                                key={idx}
                                className='w-fit relative'
                            >
                                <img src={el.path} alt="product" className='w-[200px] object-contain' />
                            </div>
                        ))}
                    </div>}
                    <div className='my-6'><Button type='submit'>Tạo Sản Phẩm</Button></div>
                </form>
            </div>
        </div>
    )
}

export default CreateProducts