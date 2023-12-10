// 3rd libs
const { map, forEach } = require('lodash');
// models
const Product = require('../models/product');
const ProductCategory = require('../models/productCategory');
const Order = require('../models/order');
const User = require('../models/user');
const Brand = require('../models/brand');
// import constants
const { ENTITY_TYPE } = require('../config/constants');

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

// listType should be an array
const queryTotalEntitiesByTypes = async (listTypes) =>
  Promise.all(map(listTypes, async (type) => await queryTotalEntities(type)));

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

module.exports = { queryTotalEntitiesByTypes, formatOverviewNumberResponse };
