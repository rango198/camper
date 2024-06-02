import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const WrrapInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px 0 18px 18px;
  margin-bottom: 14px;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__header {
    background-color: #007bff;
    color: white;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #007bff;
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: #e0e0e0;
  }
`;
