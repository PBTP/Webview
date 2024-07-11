import React, { forwardRef, ReactNode, ForwardedRef } from 'react';

import styles from './ContentField.module.scss';

type ContentFieldProps = {
  children: ReactNode;
  backgroundColor: 'Gray' | 'White';
  className?: string;
  onClick?: () => void;
};

const ContentField = forwardRef<HTMLDivElement, ContentFieldProps>(
  (
    { children, backgroundColor, className, onClick },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.Wrapper} ${styles[backgroundColor]} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

export default ContentField;
