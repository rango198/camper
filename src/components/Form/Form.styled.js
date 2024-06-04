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
  padding: 18px;
  margin-bottom: 14px;
  outline: none;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 18px;
  border: none;
  outline: none;
  background: #f7f7f7;
  margin-bottom: 24px;
  resize: none;
  overflow: auto;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  background: #f7f7f7;
  font-size: 16px;
  outline: none;
  border: none;
  margin-bottom: 14px;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    border-radius: 10px;
    background: #f7f7f7;
    border: none;
    box-shadow: none;
  }

  .react-datepicker__header {
    background-color: #007bff;
    color: white;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #007bff;
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: #e0e0e0;
  }

  .react-datepicker__day,
  .react-datepicker__time-name {
    color: black; /* Adjust text color for better readability */
  }

  .react-datepicker__current-month {
    font-size: 1.2em;
  }
`;

export const FormButton = styled.button`
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
  width: 156px;
`;
