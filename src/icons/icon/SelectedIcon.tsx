import SelectedIconSvg from '@/assets/icon/selected.svg?react';
import { IconProps } from '../types';

const SelectedIcon = ({ width, height, className, onClick }: IconProps) => {
  return (
    <SelectedIconSvg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default SelectedIcon;
