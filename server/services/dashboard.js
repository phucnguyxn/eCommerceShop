// 3rd libs
const moment = require('moment');
const { map, forEach, reduce } = require('lodash');
// models
const Product = require('../models/product');
const ProductCategory = require('../models/productCategory');
const Order = require('../models/order');
const User = require('../models/user');
const Brand = require('../models/brand');
// import constants, helpers
const {
  ENTITY_TYPE,
  SORT_DESC,
  MOMENT_MONTHS,
} = require('../config/constants');
const { calculateAmountFromListProducts } = require('../utils/helpers');

// listType should be an array
const queryTotalEntities = async (type) => {
  switch (type) {
    case ENTITY_TYPE.product:
      return await Product.count();
    case ENTITY_TYPE.productCategory:
      return await ProductCategory.count();
    case ENTITY_TYPE.order:
      return await Order.count();
    case ENTITY_TYPE.user:
      return await User.count();
    case ENTITY_TYPE.brand:
      return await Brand.count();
    default:
      return 0;
  }
};

// listType should be an array of types
const queryTotalEntitiesByTypes = async (listTypes) =>
  Promise.all(map(listTypes, async (type) => await queryTotalEntities(type)));

// example: [0, 1] will be converted to { totalProducts: 0, totalUsers: 1 }
const formatOverviewNumberResponse = (data) => {
  const result = {};
  let index = 0;
  forEach(ENTITY_TYPE, (type) => {
    switch (type) {
      case ENTITY_TYPE.product:
        key = 'totalProducts';
        break;
      case ENTITY_TYPE.productCategory:
        key = 'totalProductCategories';
        break;
      case ENTITY_TYPE.order:
        key = 'totalOrders';
        break;
      case ENTITY_TYPE.user:
        key = 'totalUsers';
        break;
      case ENTITY_TYPE.brand:
        key = 'totalBrands';
        break;
      default:
        break;
    }
    result[key] = data[index];
    index++;
  });
  return result;
};

// limit should be number, default = LIMIT_BEST_SELLERS_COUNT (in config/constants)
const queryBestSellingProducts = async (limit) =>
  await Product.find().sort({ sold: SORT_DESC }).limit(limit).exec();

const queryOrdersByMonth = async (momentMonth) => {
  const sampleDate = `${moment().year()}-${momentMonth + 1}-01`;
  const startOfMonth = moment(sampleDate).startOf('month').toDate();
  const endOfMonth = moment(sampleDate).endOf('month').toDate();

  const orders = await Order.find({
    createdAt: {
      $gte: startOfMonth,
      $lte: endOfMonth,
    },
  });
  const totalOrderAmount = reduce(
    orders,
    (acc, order) => acc + calculateAmountFromListProducts(order.products),
    0,
  );

  return totalOrderAmount;
};

const getRevenueAnalyticOfThisYear = async () => {
  const result = [];
  for (const momentMonth of Object.values(MOMENT_MONTHS)) {
    const totalOrderAmount = await queryOrdersByMonth(momentMonth);
    result.push(totalOrderAmount);
  }
  return result;
};

module.exports = {
  queryTotalEntitiesByTypes,
  queryBestSellingProducts,
  queryOrdersByMonth,
  formatOverviewNumberResponse,
  getRevenueAnalyticOfThisYear,
};
