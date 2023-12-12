import { styled } from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const TopBar = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  padding: 0 16px;
  left: 327px;
  top: 0;
  width: 100%;
  height: 75px;
  font-size: 30px;
  border-bottom: 1px solid rgb(229, 231, 235);
  background-color: white;
  z-index: 9999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-radius: 6px;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const SectionTitle = styled.span`
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
