// 3rd libs
const moment = require('moment');
const { map, forEach, range } = require('lodash');
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
  QUARTERS,
} = require('../config/constants');
const {
  getTotalAmountOfListOrders,
  getQuarterRange,
  getTotalDaysOfThisMonth,
} = require('../utils/helpers');

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

const queryOrdersByDay = async (momentDay) => {
  const currentMonth = moment().month() + 1;
  const currentYear = moment().year();
  const sampleDate = `${currentYear}-${currentMonth}-${momentDay + 1}`;

  const startOfDay = moment(sampleDate).startOf('day').toDate();
  const endOfDay = moment(sampleDate).endOf('day').toDate();

  return await Order.find({
    createdAt: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  });
};

const queryOrdersByMonth = async (momentMonth) => {
  const sampleDate = `${moment().year()}-${momentMonth + 1}-01`;
  const startOfMonth = moment(sampleDate).startOf('month').toDate();
  const endOfMonth = moment(sampleDate).endOf('month').toDate();

  return await Order.find({
    createdAt: {
      $gte: startOfMonth,
      $lte: endOfMonth,
    },
  });
};

const queryOrdersByQuarter = async (quarter) => {
  const { startOfQuarter, endOfQuarter } = getQuarterRange(quarter);

  return await Order.find({
    createdAt: {
      $gte: startOfQuarter,
      $lte: endOfQuarter,
    },
  });
};

const getRevenueEveryDayOfThisMonth = async () => {
  const result = [];
  for (const momentDay of range(0, getTotalDaysOfThisMonth())) {
    const hasTotalAmount = momentDay < moment().date();
    if (hasTotalAmount) {
      const orders = await queryOrdersByDay(momentDay);
      const totalAmount = getTotalAmountOfListOrders(orders);
      result.push(totalAmount);
    } else {
      result.push(null);
    }
  }
  return result;
};

const getRevenueEveryMonthOfThisYear = async () => {
  const result = [];
  for (const momentMonth of Object.values(MOMENT_MONTHS)) {
    const hasTotalAmount = momentMonth <= moment().month();
    if (hasTotalAmount) {
      const orders = await queryOrdersByMonth(momentMonth);
      const totalAmount = getTotalAmountOfListOrders(orders);
      result.push(totalAmount);
    } else {
      result.push(null);
    }
  }
  return result;
};

const getRevenueEveryQuarterOfThisYear = async () => {
  const result = [];
  for (const quarter of QUARTERS) {
    const hasTotalAmount = quarter <= moment().quarter();
    if (hasTotalAmount) {
      const orders = await queryOrdersByQuarter(quarter);
      const totalAmount = getTotalAmountOfListOrders(orders);
      result.push(totalAmount);
    } else {
      result.push(null);
    }
  }
  return result;
};

module.exports = {
  queryTotalEntitiesByTypes,
  queryBestSellingProducts,
  queryOrdersByMonth,
  formatOverviewNumberResponse,
  getRevenueEveryDayOfThisMonth,
  getRevenueEveryMonthOfThisYear,
  getRevenueEveryQuarterOfThisYear,
};
