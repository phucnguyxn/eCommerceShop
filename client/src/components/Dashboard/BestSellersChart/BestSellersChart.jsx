import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Bar as BarChart } from 'react-chartjs-2';
import { get, map, truncate } from 'lodash';
import { getBestSellers } from 'apis/dashboard';
import * as Styled from './styled';

const BestSellersChart = ({ limit }) => {
  const { data } = useQuery({
    queryKey: ['getBestSellers', { limit }],
    queryFn: () => getBestSellers(limit),
  });

  const { productNames, soldList } = useMemo(() => ({
    productNames: map(data, (product) => get(product, 'title')),
    soldList: map(data, (product) => get(product, 'sold'), [data]),
  }));

  return (
    <Styled.Wrapper>
      <BarChart
        data={{
          labels: productNames,
          datasets: [
            {
              axis: 'y',
              label: 'Số lượng đã bán',
              data: soldList,
              backgroundColor: '#3b82f6',
              maxBarThickness: 40,
              barPercentage: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          indexAxis: 'y',
          plugins: {
            legend: {
              onClick: () => null,
            },
          },
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  return truncate(this.getLabelForValue(value), { length: 32 });
                },
              },
            },
          },
        }}
      />
    </Styled.Wrapper>
  );
};

export default BestSellersChart;
