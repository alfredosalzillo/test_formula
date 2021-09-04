import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.css';

export type ButtonProps = React.PropsWithChildren<{
  color?: 'primary' | 'default',
  fullWidth?: boolean,
  disabled?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>>;

/**
 * A simple styled button.
 * Available in two color: 'primary' and 'default'.
 */
const Button = (props: ButtonProps) => {
  const {
    color,
    fullWidth = false,
    disabled = false,
    ...others
  } = props;
  const className = clsx(
    classes.root,
    {
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.primary]: color === 'primary',
    },
    others.className,
  );
  return (
    <button
      type="button"
      disabled={disabled}
      {...others}
      className={className}
    />
  );
};
export default Button;
