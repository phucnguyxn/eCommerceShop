const { get } = require('lodash');
const asyncHandler = require('express-async-handler');
const DashboardService = require('../services/dashboard');
const {
  ENTITY_TYPE,
  LIMIT_BEST_SELLERS_COUNT,
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

const getRevenueAnalytic = asyncHandler(async (request, response) => {
  return response.json('getRevenueAnalytic');
});

module.exports = {
  getOverviewNumbers,
  getBestSellers,
  getRevenueAnalytic,
};
