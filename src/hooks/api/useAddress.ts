import { searchAddress, searchCoordinate } from '@/hooks/api/services/address';
import { useQuery } from '@tanstack/react-query';
import { ReqSearchAddress, ReqSearchCoordinate } from './types/address';

export const useAddress = ({
  keyword,
  countPerPage = 5,
  currentPage = 1,
  isSelected = false,
}: ReqSearchAddress) => {
  return useQuery({
    queryKey: ['address', { currentPage, countPerPage, keyword }],
    queryFn: async () => {
      try {
        const res = await searchAddress({
          keyword,
          currentPage,
          countPerPage,
        });
        if (res?.common.errorCode !== '0') {
          throw new Error(res?.common.errorMessage);
        }
        return res;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    staleTime: 1000 * 60,
    enabled: !!keyword && !isSelected,
    retry: 0,
  });
};

export const useCoordinate = ({
  admCd,
  rnMgtSn,
  udrtYn,
  buldMnnm,
  buldSlno,
}: ReqSearchCoordinate) => {
  return useQuery({
    queryKey: ['coordinate', { rnMgtSn, buldMnnm, buldSlno }],
    queryFn: async () => {
      try {
        const res = await searchCoordinate({
          admCd,
          rnMgtSn,
          udrtYn,
          buldMnnm,
          buldSlno,
        });
        if (res?.common.errorCode !== '0') {
          throw new Error(res?.common.errorMessage);
        }
        return res;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    select: (data) => {
      return {
        data: data.juso[0],
      };
    },
    staleTime: 1000 * 60,
    enabled: !!rnMgtSn,
    retry: 0,
  });
};
