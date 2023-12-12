import { useState } from 'react';
import { get } from 'lodash';
import {
  BestSellersChart,
  OverviewNumbers,
  RevenueAnalyticChart,
} from 'components/Dashboard';
import Select from 'react-select';
import * as Styled from './styled';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ];

  const renderHighlightedNumbers = () => (
    <Styled.Section>
      <Styled.SectionTitle>Chỉ số tổng quan</Styled.SectionTitle>
      <OverviewNumbers />
    </Styled.Section>
  );

  const renderBestSellersChart = () => (
    <Styled.Section>
      <Styled.SectionHeader>
        <Styled.SectionTitle>Biểu đồ SP bán chạy</Styled.SectionTitle>
        <Select
          options={options}
          defaultValue={{ label: 'Top 5', value: 5 }}
          value={selectedOption}
          onChange={setSelectedOption}
        />
      </Styled.SectionHeader>
      <BestSellersChart limit={get(selectedOption, 'value', 5)} />
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
