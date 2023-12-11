import { get } from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { getOverviewNumbers } from 'apis/dashboard';
import {
  FcDatabase,
  FcDataSheet,
  FcBusinessman,
  FcDiploma2,
} from 'react-icons/fc';
import * as Styled from './styled';

const OverviewNumbers = () => {
  const { data } = useQuery({
    queryKey: ['getHighlightNumbers'],
    queryFn: getOverviewNumbers,
  });

  const renderMetric = ({ title, value, icon, iconBg, background }) => (
    <Styled.Card background={background}>
      <Styled.IconWrapper iconBg={iconBg}>{icon}</Styled.IconWrapper>
      <Styled.CardContent>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Value>{value}</Styled.Value>
      </Styled.CardContent>
    </Styled.Card>
  );

  return (
    <Styled.Wrapper>
      {renderMetric({
        title: 'Số sản phẩm',
        value: get(data, 'totalProducts', '-'),
        icon: <FcDatabase size={24} />,
        iconBg: '#f6cd47',
        background: '#fff8e5',
      })}
      {renderMetric({
        title: 'Số danh mục SP',
        value: get(data, 'totalProductCategories', '-'),
        icon: <FcDataSheet size={24} />,
        iconBg: '#1da956',
        background: '#e4f8eb',
      })}
      {renderMetric({
        title: 'Số người dùng',
        value: get(data, 'totalUsers', '-'),
        icon: <FcBusinessman size={24} />,
        iconBg: '#6f5bee',
        background: '#ebe8fe',
      })}
      {renderMetric({
        title: 'Số đơn hàng',
        value: get(data, 'totalOrders', '-'),
        icon: <FcDiploma2 size={24} />,
        iconBg: 'white',
        background: '#f2a1a1',
      })}
    </Styled.Wrapper>
  );
};

export default OverviewNumbers;
