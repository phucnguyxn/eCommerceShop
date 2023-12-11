import {
  BestSellersChart,
  HighlightedNumbers,
  RevenueAnalyticChart,
} from 'components/Dashboard';
import * as Styled from './styled';

const Dashboard = () => {
  const renderHighlightedNumbers = () => (
    <Styled.Section>
      <Styled.SectionTitle>Chỉ số tổng quan</Styled.SectionTitle>
      <HighlightedNumbers />
    </Styled.Section>
  );

  const renderBestSellersChart = () => (
    <Styled.Section>
      <Styled.SectionTitle>Biểu đồ SP bán chạy</Styled.SectionTitle>
      <BestSellersChart />
    </Styled.Section>
  );

  const renderRevenueAnalyticChart = () => (
    <Styled.Section>
      <Styled.SectionTitle>Biểu đồ thống kê doanh thu</Styled.SectionTitle>
      <RevenueAnalyticChart />
    </Styled.Section>
  );

  return (
    <Styled.DashboardContainer>
      <Styled.TopBar>Bảng tổng quan</Styled.TopBar>
      <Styled.Content>
        {renderHighlightedNumbers()}
        {renderBestSellersChart()}
        {renderRevenueAnalyticChart()}
      </Styled.Content>
    </Styled.DashboardContainer>
  );
};

export default Dashboard;
