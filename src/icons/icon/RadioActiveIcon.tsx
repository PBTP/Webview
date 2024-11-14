import RadioActiveIconSvg from '@/assets/icon/radio-active.svg';
import { IconProps } from '../types';

const RadioActiveIcon = ({ width, height, className, onClick }: IconProps) => {
  return (
    <RadioActiveIconSvg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default RadioActiveIcon;
