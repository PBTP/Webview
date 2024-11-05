import DeleteXSvg from '@/assets/icon/delete_x.svg';
import { IconProps } from '../types';

const DeleteXIcon = ({width,height,className,onClick}: IconProps) => {
  return (
    <DeleteXSvg
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
}

export default DeleteXIcon;