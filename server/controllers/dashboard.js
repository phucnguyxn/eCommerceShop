const { get } = require('lodash');
const asyncHandler = require('express-async-handler');
const DashboardService = require('../services/dashboard');
const {
  ENTITY_TYPE,
  LIMIT_BEST_SELLERS_COUNT,
  TIME_RANGE,
} = require('../config/constants');

const getOverviewNumbers = asyncHandler(async (request, response) => {
  const data = await DashboardService.queryTotalEntitiesByTypes(
    Object.values(ENTITY_TYPE),
  );
  const result = DashboardService.formatOverviewNumberResponse(data);
  return response.json(result);
});

const getBestSellers = asyncHandler(async (request, response) => {
  const limit = get(request, 'query.limit', LIMIT_BEST_SELLERS_COUNT);
  const data = await DashboardService.queryBestSellingProducts(limit);
  return response.json(data);
});

// will return an array of numbers
const getRevenueAnalytic = asyncHandler(async (request, response) => {
  const timeRangeType = get(request, 'query.timeRangeType', TIME_RANGE.DAY);
  let data = [];
  switch (timeRangeType) {
    case TIME_RANGE.DAY:
      data = await DashboardService.getRevenueEveryDayOfThisMonth();
      break;
    case TIME_RANGE.MONTH:
      data = await DashboardService.getRevenueEveryMonthOfThisYear();
      break;
    case TIME_RANGE.QUARTER:
      data = await DashboardService.getRevenueEveryQuarterOfThisYear();
      break;
    default:
      break;
  }
  return response.json(data);
});

module.exports = {
  getOverviewNumbers,
  getBestSellers,
  getRevenueAnalytic,
};
