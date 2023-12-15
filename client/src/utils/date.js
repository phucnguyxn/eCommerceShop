import moment from 'moment';
import { map, range } from 'lodash';

export const getDayListOfCurrentMonth = () => {
  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;
  const endDateOfMonth = moment(`${currentYear}-${currentMonth}-01`)
    .endOf('month')
    .date();

  return map(
    range(1, endDateOfMonth + 1),
    (value) => `Ngày ${value} tháng ${currentMonth} năm ${currentYear}`,
  );
};

// "Ngày 12 tháng 8 năm 2023" => 12
export const getDateFromFormatString = (value) => value.match(/Ngày (\d+)/)[1];
