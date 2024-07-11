import { searchAddress } from '@/services/address';
import { useQuery } from '@tanstack/react-query';

export type TReqSearchAddress = {
  keyword: string;
  currentPage?: number;
  countPerPage?: number;
  isSelected?: boolean;
};

const useAddress = ({
  keyword,
  countPerPage = 5,
  currentPage = 1,
  isSelected = false,
}: TReqSearchAddress) => {
  return useQuery({
    queryKey: ['address', { currentPage, countPerPage, keyword }],
    queryFn: async () => {
      const res = await searchAddress({
        keyword,
        currentPage,
        countPerPage,
      });
      if (res?.common.errorCode !== '0') {
        throw new Error(res?.common.errorMessage);
      }
      return res;
    },
    staleTime: 1000 * 60,
    enabled: !!keyword && !isSelected,
    retry: 0,
  });
};

export default useAddress;
