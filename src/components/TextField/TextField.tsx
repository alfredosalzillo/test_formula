import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './TextField.module.css';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type TextFieldProps = Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> & {
  label?: React.ReactNode,
  helperText?: React.ReactNode,
  placeholder?: string,
  type?: InputProps['type'],
  value?: InputProps['value'],
  onChange?: InputProps['onChange'],
  required?: boolean,
  disabled?: boolean,
  error?: boolean,
  fullWidth?: boolean,
  InputProps?: InputProps,
};
/**
 * A simple input field.
 * Support label, helper text, error and disabled version.
 */
const TextField = (props: TextFieldProps) => {
  const {
    id,
    type,
    value,
    onChange,
    label,
    helperText,
    placeholder,
    required = false,
    disabled = false,
    fullWidth = false,
    error = false,
    InputProps = {},
    ...others
  } = props;
  return (
    <label
      {...others}
      htmlFor={id}
      className={clsx(classes.root, others.className, {
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.error]: error,
      })}
    >
      {label}
      {label && required && ' *'}
      <br />
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        {...InputProps}
        className={clsx(classes.input, InputProps.className)}
      />
      {helperText && (
        <p className={classes.helperText}>
          {helperText}
        </p>
      )}
    </label>
  );
};

export default TextField;
