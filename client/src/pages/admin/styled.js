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
  padding: 16px;
`;
