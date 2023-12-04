const path = {
    PUBLIC: '/',
    HOME: '',
    ALL: '*',
    LOGIN: 'login',
    PRODUCTS__CATEGORY: ':category',
    BLOGS: 'blogs',
    OUR_SERVICES: 'services',
    FAQ: 'faqs',
    DETAIL_PRODUCT__CATEGORY__PID__TITLE: ':category/:pid/:title',
    FINAL_REGISTER: 'finalregister/:status',
    RESET_PASSWORD: 'reset-password/:token',
    DETAIL_CART: 'my-cart',
    CHECKOUT: 'checkout',
    PRODUCTS: 'products',
    CATEGORIES: 'categories',
    BRANDS: 'brands',


    // Admin
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    MANAGE_USER: 'manage-user',
    MANAGE_PRODUCTS: 'manage-products',
    MANAGE_ORDER: 'manage-order',
    MANAGE_BRANDS: 'manage-brands',
    MANAGE_CATEGORIES:'manage-categories',
    CREATE_PRODUCTS: 'create-products',
    CREATE_CATEGORIES: 'create-categories',
    CREATE_BRANDS: 'create-brands',

    // Member
    MEMBER: 'member',
    PERSONAL: 'personal',
    MY_CART: 'my-cart',
    HISTORY: 'buy-history',
    WISHLIST: 'wishlist',
}


export default path