import styled from '@emotion/styled';

export const SidebarButton = styled.button`
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
`;

export const SidebarInput = styled.input`
  border: none;
  border-radius: 10px;
  background: #d3d4d5;
  padding: 18px;

  outline: none;
  box-shadow: none;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
