import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  buttonType: 'Gray' | 'White' | 'Primary' | 'Disabled' | 'Reserved';
  children?: ReactNode;
  className?: string;
};

const Button = ({ children, buttonType, className }: ButtonProps) => {
  return (
    <button
      disabled={['Disabled', 'Reserved'].includes(buttonType)}
      className={`${className} ${styles[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
