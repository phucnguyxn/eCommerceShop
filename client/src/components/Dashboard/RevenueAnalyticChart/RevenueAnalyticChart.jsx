import { useMemo } from 'react';
import { map, range } from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { Line as LineChart } from 'react-chartjs-2';
import { getRevenueAnalytic } from 'apis/dashboard';
import * as Styled from './styled';
import { getDateFromFormatString, getDayListOfCurrentMonth } from 'utils/date';

const MONTHS = map(range(1, 13), (value) => `Tháng ${value}`);

const QUARTERS = ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];

// do NOT change this value, it's enum!
const TIME_RANGE_ENUM = {
  DAY: 'DAY',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
};

const RevenueAnalyticChart = ({ timeRangeType }) => {
  const { data } = useQuery({
    queryKey: ['getRevenueAnalytic', { timeRangeType }],
    queryFn: () => getRevenueAnalytic(timeRangeType),
  });

  const chartLabels = useMemo(() => {
    switch (timeRangeType) {
      case TIME_RANGE_ENUM.DAY:
        return getDayListOfCurrentMonth();
      case TIME_RANGE_ENUM.MONTH:
        return MONTHS;
      case TIME_RANGE_ENUM.QUARTER:
        return QUARTERS;
      default:
        return [];
    }
  }, [timeRangeType]);

  return (
    <Styled.Wrapper>
      <LineChart
        data={{
          labels: chartLabels,
          datasets: [
            {
              label: 'Doanh thu (VNĐ)',
              data: data,
              borderColor: '#1da956',
              backgroundColor: '#e4f8eb',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 5,
              hoverRadius: 5,
            },
          },
          plugins: {
            legend: {
              onClick: () => null,
            },
          },
          scales: {
            x: {
              ticks: {
                callback: function (value) {
                  const label = this.getLabelForValue(value);
                  if (timeRangeType === TIME_RANGE_ENUM.DAY) {
                    return getDateFromFormatString(label);
                  }
                  return label;
                },
              },
            },
            y: {
              min: 0,
            },
          },
        }}
      />
    </Styled.Wrapper>
  );
};

export default RevenueAnalyticChart;
