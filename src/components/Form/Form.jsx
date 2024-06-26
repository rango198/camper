import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import * as Style from './Form.styled';

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  // Watch the date value
  const bookingDate = watch('bookingDate');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Style.WrrapInput>
        <Style.Input
          {...register('Name', { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <Style.Input
          {...register('Email', {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Введіть правильний email',
            },
          })}
          placeholder="Email"
        />
        {errors.Email && <p>{errors.Email.message}</p>}

        <Style.StyledDatePicker
          selected={bookingDate}
          onChange={date => setValue('bookingDate', date)}
          placeholderText="Booking date"
          dateFormat="yyyy/MM/dd"
        />
        <Style.StyledTextArea
          {...register('comments', { maxLength: 200 })}
          placeholder="Your comments"
        />
        <Style.FormButton type="submit">Send</Style.FormButton>
      </Style.WrrapInput>
    </form>
  );
};

export default Form;
