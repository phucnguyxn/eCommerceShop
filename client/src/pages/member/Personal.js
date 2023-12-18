import { Button, InputForm } from 'components'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import avatar from 'assets/avatarDefault.png'
import { apiUpdateCurrent } from 'apis'
import { getCurrent } from 'store/user/asyncActions'
import { toast } from 'react-toastify'
import { getBase64 } from 'utils/helpers'
import { useSearchParams } from 'react-router-dom'
import withBaseComponent from 'hocs/withBaseComponent'

const Personal = ({ navigate }) => {
    const { register, formState: { errors, isDirty }, handleSubmit, reset, watch } = useForm()
    const { current } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    useEffect(() => {
        reset({
            firstname: current?.firstname,
            lastname: current?.lastname,
            mobile: current?.mobile,
            email: current?.email,
            avatar: current?.avatar,
            address: current?.address,
        })
    }, [current])
    const handleUpdateInfor = async (data) => {
        const formData = new FormData()
        if (data.avatar.length > 0) formData.append('avatar', data.avatar[0])
        delete data.avatar
        for (let i of Object.entries(data)) formData.append(i[0], i[1])

        const response = await apiUpdateCurrent(formData)
        if (response.success) {
            dispatch(getCurrent())
            toast.success(response.mes)
            if (searchParams.get('redirect')) navigate(searchParams.get('redirect'))
        } else toast.error(response.mes)
    }
    return (
        <div className='w-full relative px-4'>
            <header className='text-3xl font-semibold py-4 border-b border-b-blue-200'>
                Thông tin cá nhân
            </header>
            <form onSubmit={handleSubmit(handleUpdateInfor)} className='w-3/5 mx-auto py-8 flex flex-col gap-4'>
                <InputForm
                    label='Họ'
                    register={register}
                    errors={errors}
                    id='firstname'
                    validate={{
                        required: 'Không được để trống ',
                        pattern: {
                            value: /^[^\d?!\@#\$%\><\^\&*\)\(+=._-]{2,}$/gm,
                            message: 'Họ chỉ chứa chữ cái và dấu.'
                        }

                    }}
                />
                <InputForm
                    label='Tên'
                    register={register}
                    errors={errors}
                    id='lastname'
                    validate={{
                        required: 'Không được để trống ',
                        pattern: {
                            value: /^[^\d?!\@#\$%\><\^\&*\)\(+=._-]{2,}$/gm,
                            message: 'Tên chỉ chứa chữ cái và dấu.'
                        }

                    }}
                />
                <InputForm
                    label='Email'
                    register={register}
                    errors={errors}
                    id='email'
                    validate={{
                        required: 'Không được để trống ',
                        pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Email không đúng.' }
                    }}
                />
                <InputForm
                    label='Số điện thoại'
                    register={register}
                    errors={errors}
                    id='mobile'
                    validate={{
                        required: 'Không được để trống ',
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/gm,
                            message: 'Phone không đúng.'
                        }

                    }}
                />
                <InputForm
                    label='Địa chỉ'
                    register={register}
                    errors={errors}
                    id='address'
                    validate={{
                        required: 'Không được để trống ',
                    }}
                />
                <div className='flex items-center gap-2'>
                    <span className='font-medium'>Trạng thái tài khoản:</span>
                    <span>{current?.isBlocked ? 'Bị khóa' : 'Đã kích hoạt'}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium'>Vai trò:</span>
                    <span>{+current?.role === 1945 ? 'Quản trị viên' : 'Người dùng'}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium'>Đã tạo:</span>
                    <span>{moment(current?.createdAt).fromNow()}</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-medium'>Ảnh đại diện:</span>
                    <label htmlFor="file">
                        <img src={current?.avatar || avatar} alt="avatar" className='w-20 h-20 ml-8 object-cover rounded-full' />
                    </label>
                    <input type="file" id="file" {...register('avatar')} hidden />
                </div>
                {isDirty && <div className='w-full flex justify-end'><Button type='submit'>Cập nhật</Button></div>}
            </form>
        </div>
    )
}

export default withBaseComponent(Personal)
