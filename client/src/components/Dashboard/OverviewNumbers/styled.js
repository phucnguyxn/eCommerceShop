import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: ${({ background }) => background};
  width: 220px;
  padding: 8px;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ iconBg }) => iconBg};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-size: 14px;
`;

export const Value = styled.span`
  font-size: 26px;
  font-weight: 600;
`;
