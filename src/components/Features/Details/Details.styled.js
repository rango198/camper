import styled from '@emotion/styled';

export const TitleDetails = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;
export const TextDetails = styled.p`
  color: #101828;
  font-family: Inter;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;

  span:first-child {
    margin-right: 10px;
    font-weight: 600;
  }
`;

export const WrrapTextDetails = styled.div`
  border-top: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px 5px 0 5px;
`;
