import SearchIconSvg from '@/assets/icon/search.svg';
import { IconProps } from '../types';
/**
 *
 * 해당 아이콘은 stroke값이 default none입니다.
 */
const SearchIcon = ({ width, height, className, stroke }: IconProps) => {
  return (
    <SearchIconSvg
      className={className}
      width={width}
      height={height}
      stroke={stroke}
    />
  );
};

export default SearchIcon;
