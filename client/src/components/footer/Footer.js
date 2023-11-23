import React, { memo } from 'react'
import icons from 'ultils/icons'


const { MdEmail } = icons
const Footer = () => {
    return (
        <div className='w-full '>
            <div className='h-[103px] w-full bg-main flex items-center justify-center'>
                <div className='w-main flex items-center justify-between'>
                    <div className='flex flex-col flex-1'>
                        <span className='text-[20px] text-gray-100'>Đăng kí để nhận bản tin</span>
                        <small className='text-[13px] text-gray-300'>Theo dõi ngay để nhận bản tin hằng tuần</small>
                    </div>
                    <div className='flex-1 flex items-center'>
                        <input
                            className='p-4 pr-0 rounded-l-full w-full bg-[#F04646] outline-none text-gray-100 placeholder:text-sm placeholder:text-gray-200 placeholder:italic placeholder:opacity-50'
                            type="text"
                            placeholder='Email address'
                        />
                        <div className='h-[56px] w-[56px] bg-[#F04646] rounded-r-full flex items-center justify-center text-white'>
                            <MdEmail size={18} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[407px] w-full bg-gray-900 flex items-center justify-center text-white text-[13px]'>
                <div className='w-main flex'>
                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>VỀ CHÚNG TÔI</h3>
                        <span>
                            <span>ĐỊA CHỈ: </span>
                            <span className='opacity-70'>VINCOM PLAZA, 910A Ngô Quyền,TP Đà Nẵng, Việt Nam</span>
                        </span>
                        <span>
                            <span>SĐT: </span>
                            <span className='opacity-70'>(+94)56789xxx</span>
                        </span>
                        <span>
                            <span>Mail: </span>
                            <span className='opacity-70'>digitalworldstore@gmail.com</span>
                        </span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>THÔNG TIN</h3>
                        <span>Giấy phép kinh doanh
                        </span>
                        <span>Gallery</span>
                        <span>Danh sách cửa hàng</span>
                        <span>Deal trong ngày</span>
                        <span>Liên hệ</span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>CÂU HỎI HỖ TRỢ</h3>
                        <span>Trợ giúp</span>
                        <span>Miễn phí vận chuyển</span>
                        <span>FAQs</span>
                        <span>Chính sách đổi trả</span>
                        <span>Đối tác</span>

                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>#DIGITALWORLDSTORE</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)