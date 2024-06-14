import UnSelectedIconSvg from '@/assets/icon/un_selected.svg?react';
import { IconProps } from '../types';

const UnSelectedIcon = ({ width, height, className, onClick }: IconProps) => {
  return (
    <UnSelectedIconSvg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default UnSelectedIcon;
