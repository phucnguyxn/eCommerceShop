import path from "./path"
import icons from "./icons"

export const navigation = [
  {
    id: 1,
    value: "TRANG CHỦ",
    path: `/${path.HOME}`,
  },
  {
    id: 2,
    value: "SẢN PHẨM",
    path: `/${path.PRODUCTS}`,
  },
  {
    id: 3,
    value: "BLOGS",
    path: `/${path.BLOGS}`,
  },
  {
    id: 4,
    value: "DỊCH VỤ",
    path: `/${path.OUR_SERVICES}`,
  },
  {
    id: 5,
    value: "FAQs",
    path: `/${path.FAQ}`,
  },
]
const { RiTruckFill, BsShieldShaded, BsReplyFill, FaTty, AiFillGift } = icons
export const productExtraInfomation = [
  {
    id: "1",
    title: "Bảo Hành",
    sub: "Kiểm định Chất Lượng",
    icon: <BsShieldShaded />,
  },
  {
    id: "2",
    title: "Miễn Phí Giao Hàng",
    sub: "Trên toàn bộ sản phẩm",
    icon: <RiTruckFill />,
  },
  {
    id: "3",
    title: "Ưu Đãi Thành Viên",
    sub: "Thẻ thành viên đặc biệt",
    icon: <AiFillGift />,
  },
  {
    id: "4",
    title: "Chính Sách Đổi Trả",
    sub: "Miễn phí trong 7 ngày",
    icon: <BsReplyFill />,
  },
  {
    id: "5",
    title: "Tư Vấn",
    sub: "24/7",
    icon: <FaTty />,
  },
]

export const productInfoTabs = [
  {
    id: 1,
    name: "Mô Tả Sản Phẩm",
    content: `Technology: GSM / HSPA / LTE
        Dimensions: 153.8 x 75.5 x 7.6 mm
        Weight: 154 g
        Display: IPS LCD 5.5 inches
        Resolution: 720 x 1280
        OS: Android OS, v6.0 (Marshmallow)
        Chipset: Octa-core
        CPU: Octa-core
        Internal: 32 GB, 4 GB RAM
        Camera: 13MB - 20 MP`,
  },
  {
    id: 2,
    name: "Chính Sách Bảo Hành",
    content: `THÔNG TIN BẢO HÀNH
    Tất cả sản phẩm được kích hoạt bảo hành điện tử ngay sau khi mua. Quý khách vui lòng yêu cầu cửa hàng kích hoạt bảo hành điện tử và có thể kiểm tra thời gian bảo hành thông qua số IMEI/Sêri của sản phẩm tại đây.
        
      Sản phẩm nếu có tem niêm phong (seal) trên sản phẩm thì tem niêm phong phải còn nguyên vẹn.
    • Đối với sản phẩm bảo hành trên hộp: sản phẩm còn đầy đủ hộp.
    • Sản phẩm không trầy xước, cấn móp, bể, vỡ, biến dạng so với ban đầu.`,
  },
  {
    id: 3,
    name: "Vận Chuyển",
    content: `Chính Sách Vận Chuyển
    Để tăng thêm sự thuận tiện và dễ dàng cho Quý khách khi mua sắm online, Cửa hàng hỗ trợ giao hàng tới tận tay khách hàng trên toàn quốc.   
• Miễn phí vận chuyển cho các đơn hàng trên toàn quốc.• Lưu ý: Khách hàng phải thanh toán tổng giá trị đơn hàng trước cho Cửa hàng.`,
  },
  {
    id: 4,
    name: "Thanh Toán",
    content: `
    Trang nội dung mang đến cho quý khách hàng thông tin hướng dẫn thanh toán khi mua hàng tại Shop
    Khi quý khách hàng nhận hàng sẽ thanh toán tổng giá trị đơn hàng bằng Payplay hoặc thẻ ghi nợ & tin dụng (áp dụng trên toàn quốc).
    `,
  },
]

export const colors = [
  "black",
  "brown",
  "gray",
  "white",
  "pink",
  "yellow",
  "orange",
  "purple",
  "green",
  "blue",
]

export const sorts = [
  {
    id: 1,
    value: "-sold",
    text: "Bán chạy nhất",
  },
  {
    id: 2,
    value: "-title",
    text: "A-Z",
  },
  {
    id: 3,
    value: "title",
    text: "Z-A",
  },
  {
    id: 4,
    value: "-price",
    text: "Giá - Cao đến thấp",
  },
  {
    id: 5,
    value: "price",
    text: "Giá - Thấp đến cao",
  },
  {
    id: 6,
    value: "-createdAt",
    text: "Mới nhất",
  },
  {
    id: 7,
    value: "createdAt",
    text: "Cũ nhất",
  },
]

export const voteOptions = [
  {
    id: 1,
    text: "Quá Tệ",
  },
  {
    id: 2,
    text: "Tệ",
  },
  {
    id: 3,
    text: "Ổn",
  },

  {
    id: 4,
    text: "Tốt",
  },

  {
    id: 5,
    text: "Rất Tốt",
  },
]
const { AiOutlineDashboard, MdGroups, TbBrandProducthunt, RiBillLine } = icons
export const adminSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Dashboard",
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Quản Lý Thành Viên",
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 3,
    type: "PARENT",
    text: "Quản Lý Sản Phẩm",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Tạo Sản Phẩm",
        path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`,
      },
      {
        text: "Quản Lý Sản Phẩm",
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}`,
      },
    ],
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Quản Lý Đơn Hàng",
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icon: <RiBillLine size={20} />,
  },
]
export const memberSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Thông Tin Cá Nhân",
    path: `/${path.MEMBER}/${path.PERSONAL}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Giỏ Hàng",
    path: `/${path.MEMBER}/${path.MY_CART}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Lịch Sử Mua Hàng",
    path: `/${path.MEMBER}/${path.HISTORY}`,
    icon: <RiBillLine size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Yêu Thích",
    path: `/${path.MEMBER}/${path.WISHLIST}`,
    icon: <RiBillLine size={20} />,
  },
]

export const roles = [
  {
    code: 1945,
    value: "Admin",
  },
  {
    code: 1979,
    value: "User",
  },
]
export const blockStatus = [
  {
    code: true,
    value: "Blocked",
  },
  {
    code: false,
    value: "Active",
  },
]
export const statusOrders = [
  {
    label: "Cancalled",
    value: "Cancalled",
  },
  {
    label: "Succeed",
    value: "Succeed",
  },
]
