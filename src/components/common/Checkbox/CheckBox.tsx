import { CheckboxIcon, SelectedCheckboxIcon } from '@/icons/icon';
import React from 'react';

interface CheckBoxProps {
  isSelected: boolean;
  width: number;
  height: number;
}

const CheckBox = ({ isSelected = false, width, height }: CheckBoxProps) => {
  return isSelected ? (
    <SelectedCheckboxIcon width={width} height={height} />
  ) : (
    <CheckboxIcon width={width} height={height} />
  );
};

export default CheckBox;
