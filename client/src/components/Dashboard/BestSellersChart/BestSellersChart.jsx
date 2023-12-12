import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Bar as BarChart } from 'react-chartjs-2';
import { get, map, truncate } from 'lodash';
import { getBestSellers } from 'apis/dashboard';
import * as Styled from './styled';

const BestSellersChart = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getBestSellers'],
    queryFn: getBestSellers,
  });

  const { productNames, soldList } = useMemo(() => ({
    productNames: map(data, (product) => get(product, 'title')),
    soldList: map(data, (product) => get(product, 'sold'), [data]),
  }));

  if (isLoading) {
    return <>Loading</>;
  }

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
              barThickness: 40,
              barPercentage: 1,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
        }}
      />
    </Styled.Wrapper>
  );
};

export default BestSellersChart;
