import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  font-family: Inter;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #878787;
  border-radius: 200px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: white;
  padding: 16px 60px;
  border: none;
  width: 250px;
  margin: 0 auto;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
