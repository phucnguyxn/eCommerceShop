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
    value: "CÂU HỎI",
    path: `/${path.FAQ}`,
  },
]
const { RiTruckFill, BsShieldShaded, BsReplyFill, FaTty, AiFillGift } = icons
export const productExtraInfomation = [
  {
    id: "1",
    title: "Bảo đảm",
    sub: "Đã kiểm tra chất lượng",
    icon: <BsShieldShaded />,
  },
  {
    id: "2",
    title: "Miễn phí vận chuyển",
    sub: "Miễn phí trên tất cả sản phẩm",
    icon: <RiTruckFill />,
  },
  {
    id: "3",
    title: "Thẻ quà tặng",
    sub: "Thẻ quà tặng đặc biệt",
    icon: <AiFillGift />,
  },
  {
    id: "4",
    title: "Hoàn trả miễn phí",
    sub: "Trong vòng 7 ngày",
    icon: <BsReplyFill />,
  },
  {
    id: "5",
    title: "Tư vấn",
    sub: "Trọn đời 24/7/356",
    icon: <FaTty />,
  },
]

export const productInfoTabs = [
  {
    id: 1,
    name: "Mô tả",
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
  // {
  //   id: 2,
  //   name: "WARRANTY",
  //   content: `WARRANTY INFORMATION
  //       LIMITED WARRANTIES
  //       Limited Warranties are non-transferable. The following Limited Warranties are given to the original retail purchaser of the following Ashley Furniture Industries, Inc.Products:

  //       Frames Used In Upholstered and Leather Products
  //       Limited Lifetime Warranty
  //       A Limited Lifetime Warranty applies to all frames used in sofas, couches, love seats, upholstered chairs, ottomans, sectionals, and sleepers. Ashley Furniture Industries,Inc. warrants these components to you, the original retail purchaser, to be free from material manufacturing defects.`,
  // },
  // {
  //   id: 3,
  //   name: "DELIVERY",
  //   content: `PURCHASING & DELIVERY
  //       Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
  //       Picking up at the store
  //       Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
  //       Delivery
  //       Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
  //       In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.`,
  // },
  {
    id: 2,
    name: "GIAO HÀNG",
    content: `
    - Đơn hàng online đều được miễn phí giao hàng trên toàn quốc (và phụ thu phí cồng kềnh nếu có).
    - Đơn hàng được xác định là hàng cồng kềnh nếu rơi vào một trong các trường hợp sau:


- Có thể là hàng thuộc ngành hàng Laptop, màn hình, Tivi, hoặc phụ kiện (chi tiết nhân viên sẽ trao đổi cụ thể khi gọi điện xác nhận đơn hàng)


- Khối lượng thực tế > 8kg


- Khối lượng quy đổi > 10kg (DxRxC/5000)


- Cả 3 chiều có kích thước lớn hơn 35cm


- Cả 2 chiều có kích thước lớn hơn 45cm


- Chỉ cần một chiều có kích thước lớn hơn 50cm



Địa chỉ giao hàng mà quý khách cung cấp trong quá trình đặt hàng có thể được thay đổi sau khi yêu cầu đặt hàng đã được chúng tôi tiếp nhận. Để thay đổi (các) thông tin này, quý khách cần liên hệ sớm nhất với Hoàng Hà Mobile với thông tin được cập nhật chính xác.`,
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
    text: "Best selling",
  },
  {
    id: 2,
    value: "-title",
    text: "Alphabetically, A-Z",
  },
  {
    id: 3,
    value: "title",
    text: "Alphabetically, Z-A",
  },
  {
    id: 4,
    value: "-price",
    text: "Price, high to low",
  },
  {
    id: 5,
    value: "price",
    text: "Price, low to high",
  },
  {
    id: 6,
    value: "-createdAt",
    text: "Date, new to old",
  },
  {
    id: 7,
    value: "createdAt",
    text: "Date, old to new",
  },
]

export const voteOptions = [
  {
    id: 1,
    text: "Tệ",
  },
  {
    id: 2,
    text: "Không hài lòng",
  },
  {
    id: 3,
    text: "Bình thường",
  },

  {
    id: 4,
    text: "Hài lòng",
  },

  {
    id: 5,
    text: "Tuyệt vời",
  },
]
const { AiOutlineDashboard, MdGroups, TbBrandProducthunt, RiBillLine } = icons
export const adminSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Thống kê",
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Quản lý tài khoản",
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 3,
    type: "PARENT",
    text: "Sản phẩm",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Thêm mới sản phẩm",
        path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`,
      },
      {
        text: "Quản lý sản phẩm",
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}`,
      },
    ],
  },
  {
    id: 4,
    type: "PARENT",
    text: "Danh mục",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Thêm mới danh mục",
        path: `/${path.ADMIN}/${path.CREATE_CATEGORIES}`,
      },
      {
        text: "Quản lý danh mục",
        path: `/${path.ADMIN}/${path.MANAGE_CATEGORIES}`,
      },
    ]
  },
  {
    id: 5,
    type: "PARENT",
    text: "Thương hiệu",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Thêm mới thương hiệu",
        path: `/${path.ADMIN}/${path.CREATE_BRANDS}`,
      },
      {
        text: "Quản lý thương hiệu",
        path: `/${path.ADMIN}/${path.MANAGE_BRANDS}`,
      },
    ]
  },
  {
    id: 6,
    type: "SINGLE",
    text: "Quản lý đơn hàng",
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icon: <RiBillLine size={20} />,
  },
]
export const memberSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Thông tin cá nhân",
    path: `/${path.MEMBER}/${path.PERSONAL}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Giỏ hàng",
    path: `/${path.MEMBER}/${path.MY_CART}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Lịch sử mua hàng",
    path: `/${path.MEMBER}/${path.HISTORY}`,
    icon: <RiBillLine size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Danh sách yêu thích",
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
    label: "Đã hủy",
    value: "Cancelled",
  },
  {
    label: "Thành công",
    value: "Succeed",
  },
]
