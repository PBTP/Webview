import ArrowSvg from '@/assets/arrow_right.svg?react';
import { IconProps } from '../types';
/**
 *
 * 해당 아이콘은 fill값이 default none입니다.
 */
const ArrowIcon = ({ width, height, fill, stroke, className }: IconProps) => {
  return (
    <ArrowSvg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
};

export default ArrowIcon;
