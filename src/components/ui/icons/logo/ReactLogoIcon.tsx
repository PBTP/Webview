import ReactSvg from '@/assets/logo/react.svg';
import { IconProps } from '../types';

const ReactLogoIcon = ({
  width,
  height,
  fill,
  stroke,
  className,
}: IconProps) => {
  return (
    <ReactSvg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
};

export default ReactLogoIcon;
