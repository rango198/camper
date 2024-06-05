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
  padding: 8px 40px;
  border: none;
`;

export const SidebarInput = styled.input`
  border: none;
  border-radius: 10px;
  background: #f2f4f7;
  padding: 18px 0px 18px 60px;
  margin-bottom: 20px;
  outline: none;
  box-shadow: none;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const TextLocation = styled.p`
  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
`;
export const TextFilter = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
`;
export const TextVehicle = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 8%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const SidebarWrapper = styled.div`
  position: relative;
  width: 360px;
`;
