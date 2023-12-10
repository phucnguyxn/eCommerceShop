const asyncHandler = require('express-async-handler');
const DashboardService = require('../services/dashboard');
const { ENTITY_TYPE } = require('../config/constants');

const getOverviewNumbers = asyncHandler(async (request, response) => {
  const data = await DashboardService.queryTotalEntitiesByTypes(
    Object.values(ENTITY_TYPE),
  );
  const result = DashboardService.formatOverviewNumberResponse(data);
  return response.json(result);
});

const getBestSellers = asyncHandler(async (request, response) => {
  return response.json('getBestSellers');
});

const getRevenueAnalytic = asyncHandler(async (request, response) => {
  return response.json('getRevenueAnalytic');
});

module.exports = {
  getOverviewNumbers,
  getBestSellers,
  getRevenueAnalytic,
};
