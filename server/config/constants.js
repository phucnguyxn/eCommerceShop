const ENTITY_TYPE = {
  product: 'product',
  order: 'order',
  productCategory: 'productCategory',
  user: 'user',
  brand: 'brand',
};

const LIMIT_BEST_SELLERS_COUNT = 5;

const SORT_ASC = 1;
const SORT_DESC = -1;

const MONTHS = {
  january: 'january',
  february: 'february',
  march: 'march',
  april: 'april',
  may: 'may',
  june: 'june',
  july: 'july',
  august: 'august',
  september: 'september',
  october: 'october',
  november: 'november',
  december: 'december',
};

const MOMENT_MONTHS = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

module.exports = {
  ENTITY_TYPE,
  LIMIT_BEST_SELLERS_COUNT,
  SORT_ASC,
  SORT_DESC,
  MOMENT_MONTHS,
  MONTHS,
};
