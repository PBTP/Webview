import ArrowDownNoTailSvg from '@/assets/icon/arrow_down_no_tail.svg';
import { IconProps } from '../types';
/**
 *
 * 해당 아이콘은 fill값이 default none입니다.
 */
const ArrowDownNoTail = ({
  width,
  height,
  fill,
  className,
  onClick,
}: IconProps) => {
  return (
    <ArrowDownNoTailSvg
      className={className}
      width={width}
      height={height}
      fill={fill}
      onClick={onClick}
    />
  );
};

export default ArrowDownNoTail;
