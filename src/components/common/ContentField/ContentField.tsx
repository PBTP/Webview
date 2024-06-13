import React, { ReactNode } from 'react';

import styles from './ContentField.module.scss';

type ContentFieldProps = {
  children: ReactNode;
  backgroundColor: 'Gray' | 'White';
  className?: string;
  onClick?: () => void;
};

const ContentField = ({
  children,
  backgroundColor,
  className,
  onClick,
}: ContentFieldProps) => {
  return (
    <div
      className={`${styles.Wrapper} ${styles[backgroundColor]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ContentField;
