import React, { forwardRef, ReactNode, ForwardedRef } from 'react';

import styles from './ContentField.module.scss';

type ContentFieldProps = {
  children: ReactNode;
  backgroundColor: 'Gray' | 'White';
  border?: 'Border' | 'None';
  className?: string;
  onClick?: () => void;
};

const ContentField = forwardRef<HTMLDivElement, ContentFieldProps>(
  (
    { children, backgroundColor, border = 'None', className, onClick },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.ContentFieldWrapper} ${styles[backgroundColor]} ${styles[border]} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

export default ContentField;
