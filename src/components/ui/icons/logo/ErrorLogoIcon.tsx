import ErrorLogoSvg from '@/assets/logo/error.svg';
import { IconProps } from '../types';

const ErrorLogoIcon = ({ width, height, className }: IconProps) => {
  return <ErrorLogoSvg className={className} width={width} height={height} />;
};

export default ErrorLogoIcon;
