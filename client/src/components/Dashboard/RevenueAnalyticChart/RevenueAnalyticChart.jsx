import { useQuery } from '@tanstack/react-query';
import { getRevenueAnalytic } from 'apis/dashboard';
import * as Styled from './styled';

const RevenueAnalyticChart = () => {
  const {data} = useQuery({
    query: ['getRevenueAnalytic'],
    queryFn: getRevenueAnalytic
  })

  return <Styled.Wrapper></Styled.Wrapper>;
};

export default RevenueAnalyticChart;
