import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  buttonType: 'Gray' | 'White' | 'Primary' | 'disabled';
  children?: ReactNode;
  className?: string;
};

const Button = ({ children, buttonType, className }: ButtonProps) => {
  return (
    <button className={`${className} ${styles[buttonType]}`}>{children}</button>
  );
};

export default Button;
