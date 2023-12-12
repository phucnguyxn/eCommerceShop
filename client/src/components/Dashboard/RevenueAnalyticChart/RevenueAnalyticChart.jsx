import moment from 'moment';
import { take } from 'lodash';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Line as LineChart } from 'react-chartjs-2';
import { getRevenueAnalytic } from 'apis/dashboard';
import * as Styled from './styled';

const MONTHS = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

const RevenueAnalyticChart = () => {
  const currentMonth = useMemo(() => moment().month() + 1, []);

  const { data } = useQuery({
    query: ['getRevenueAnalytic'],
    queryFn: getRevenueAnalytic,
  });

  return (
    <Styled.Wrapper>
      <LineChart
        data={{
          labels: take(MONTHS, currentMonth),
          datasets: [
            {
              label: 'Doanh thu',
              data: take(data, currentMonth),
              borderColor: '#1da956',
              backgroundColor: '#e4f8eb',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              onClick: () => null,
            },
          },
          scales: {
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
