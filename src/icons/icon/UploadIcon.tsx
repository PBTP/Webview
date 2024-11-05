import UploadIconSvg from '@/assets/icon/upload.svg';
import { IconProps } from '../types';
/**
 *
 * 해당 아이콘은 stroke값이 default none입니다.
 */
const UploadIcon = ({
  width,
  height,
  stroke,
  className,
  onClick,
}: IconProps) => {
  return (
    <UploadIconSvg
      className={className}
      width={width}
      height={height}
      stroke={stroke}
      onClick={onClick}
    />
  );
};

export default UploadIcon;
