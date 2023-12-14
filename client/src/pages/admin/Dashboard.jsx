import moment from 'moment';
import { useState, useMemo } from 'react';
import { get, join } from 'lodash';
import {
  BestSellersChart,
  OverviewNumbers,
  RevenueAnalyticChart,
} from 'components/Dashboard';
import Select from 'react-select';
import * as Styled from './styled';

// do NOT change this value, it's enum!
const TIME_RANGE_ENUM = {
  DAY: 'DAY',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
};

const BEST_SELLER_DEFAULT_LIMIT = 5;

const DEFAULT_SELECT_VALUE = {
  BEST_SELLER: { label: 'Top 5', value: 5 },
  TIME_RANGE: { label: 'Theo ngày', value: TIME_RANGE_ENUM.DAY },
};

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState({
    bestSeller: DEFAULT_SELECT_VALUE.BEST_SELLER,
    timeRange: DEFAULT_SELECT_VALUE.TIME_RANGE,
  });

  const bestSellerOptions = [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ];

  const timeRangeOptions = [
    { label: 'Theo ngày', value: TIME_RANGE_ENUM.DAY },
    { label: 'Theo tháng', value: TIME_RANGE_ENUM.MONTH },
    { label: 'Theo quý', value: TIME_RANGE_ENUM.QUARTER },
  ];

  const bestSellerLimit = useMemo(
    () => get(selectedOption.bestSeller, 'value', BEST_SELLER_DEFAULT_LIMIT),
    [selectedOption.bestSeller],
  );

  const timeRangeType = useMemo(
    () => get(selectedOption.timeRange, 'value', TIME_RANGE_ENUM.DAY),
    [selectedOption.timeRange],
  );

  const bestSellerTitle = useMemo(
    () => `Top ${bestSellerLimit} sản phẩm bán chạy nhất`,
    [bestSellerLimit],
  );

  const revenueAnalyticTitle = useMemo(() => {
    const currentMonth = moment().month() + 1;
    const currentYear = moment().year();
    const prefixText = 'Thống kê doanh thu';

    switch (timeRangeType) {
      case TIME_RANGE_ENUM.DAY:
        return join(
          [prefixText, 'tháng hiện tại', `(tháng ${currentMonth})`],
          ' ',
        );
      case TIME_RANGE_ENUM.MONTH:
        return join([prefixText, 'các tháng trong năm', currentYear], ' ');
      case TIME_RANGE_ENUM.QUARTER:
        return join([prefixText, 'các quý trong năm', currentYear], ' ');
      default:
        return null;
    }
  }, [timeRangeType]);

  const onChangeSelect = (type, newItem) =>
    setSelectedOption((prev) => ({
      ...prev,
      [type]: newItem,
    }));

  const renderHighlightedNumbers = () => (
    <Styled.Section>
      <Styled.SectionTitle>Chỉ số tổng quan</Styled.SectionTitle>
      <OverviewNumbers />
    </Styled.Section>
  );

  const renderBestSellersChart = () => (
    <Styled.Section>
      <Styled.SectionHeader>
        <Styled.SectionTitle>{bestSellerTitle}</Styled.SectionTitle>
        <Select
          options={bestSellerOptions}
          value={selectedOption.bestSeller}
          onChange={(newItem) => onChangeSelect('bestSeller', newItem)}
        />
      </Styled.SectionHeader>
      <BestSellersChart limit={bestSellerLimit} />
    </Styled.Section>
  );

  const renderRevenueAnalyticChart = () => (
    <Styled.Section>
      <Styled.SectionHeader>
        <Styled.SectionTitle>{revenueAnalyticTitle}</Styled.SectionTitle>
        <Select
          options={timeRangeOptions}
          value={selectedOption.timeRange}
          onChange={(newItem) => onChangeSelect('timeRange', newItem)}
        />
      </Styled.SectionHeader>
      <RevenueAnalyticChart timeRangeType={timeRangeType} />
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
