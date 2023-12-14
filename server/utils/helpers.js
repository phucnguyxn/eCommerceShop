const moment = require('moment');
const { get, reduce, multiply, toNumber } = require('lodash');
const { MOMENT_MONTHS, MONTHS } = require('../config/constants');

const getMonthName = (momentMonth) => {
  switch (momentMonth) {
    case MOMENT_MONTHS.january:
      return MONTHS.january;
    case MOMENT_MONTHS.february:
      return MONTHS.february;
    case MOMENT_MONTHS.march:
      return MONTHS.march;
    case MOMENT_MONTHS.april:
      return MONTHS.april;
    case MOMENT_MONTHS.may:
      return MONTHS.may;
    case MOMENT_MONTHS.june:
      return MONTHS.june;
    case MOMENT_MONTHS.july:
      return MONTHS.july;
    case MOMENT_MONTHS.august:
      return MONTHS.august;
    case MOMENT_MONTHS.september:
      return MONTHS.september;
    case MOMENT_MONTHS.october:
      return MONTHS.october;
    case MOMENT_MONTHS.november:
      return MONTHS.november;
    case MOMENT_MONTHS.december:
      return MONTHS.december;
    default:
      return 'invalidMonth';
  }
};

// should return number
const calculateAmountFromListProducts = (products) =>
  reduce(
    products,
    (acc, currentProduct) => {
      const quantity = get(currentProduct, 'quantity', 1);
      const price = get(currentProduct, 'price', 0);
      return toNumber(acc + multiply(quantity, price));
    },
    0,
  );

const getTotalAmountOfListOrders = (orders) =>
  reduce(
    orders,
    (acc, order) => acc + calculateAmountFromListProducts(order.products),
    0,
  );

const getTotalDaysOfThisMonth = () => {
  const currentYear = moment().year();
  const currentMonth = moment().month();
  return moment(`${currentYear}-${currentMonth + 1}-01`)
    .endOf('month')
    .date();
};

const getQuarterRange = (quarter) => {
  const startOfQuarter = moment().quarter(quarter).startOf('quarter');
  const endOfQuarter = moment().quarter(quarter).endOf('quarter');

  return { startOfQuarter, endOfQuarter };
};

module.exports = {
  getMonthName,
  calculateAmountFromListProducts,
  getTotalAmountOfListOrders,
  getTotalDaysOfThisMonth,
  getQuarterRange,
};
