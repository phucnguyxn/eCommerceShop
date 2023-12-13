const router = require('express').Router();
const dashboardController = require('../controllers/dashboard');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');

const ADMIN_MIDDLEWARE = [verifyAccessToken, isAdmin];

router.get(
  '/overview-numbers',
  ADMIN_MIDDLEWARE,
  dashboardController.getOverviewNumbers,
);

router.get(
  '/best-sellers',
  ADMIN_MIDDLEWARE,
  dashboardController.getBestSellers,
);

router.get(
  '/revenue-analytic',
  ADMIN_MIDDLEWARE,
  dashboardController.getRevenueAnalytic,
);

module.exports = router;
