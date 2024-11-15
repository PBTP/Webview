import SelectedCheckboxSvg from '@/assets/icon/selected_checkbox.svg';
import { IconProps } from '../types';

const SelectedCheckboxIcon = ({ width, height, className }: IconProps) => {
  return (
    <SelectedCheckboxSvg className={className} width={width} height={height} />
  );
};

export default SelectedCheckboxIcon;
