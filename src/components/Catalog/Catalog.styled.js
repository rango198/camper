import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  font-family: Inter;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #e44848;
  border-radius: 200px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: white;
  padding: 16px 60px;
  border: none;
  width: 250px;
  margin: 0 auto;
`;

export const Wrraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 55px;
`;

export const WrrapCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 888px;
  height: 650px;
  overflow: auto;
`;
