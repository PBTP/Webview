import axios from 'axios';
import {
  ReqSearchAddress,
  ReqSearchCoordinate,
  ResSearchAddress,
  ResSearchCoordinate,
} from '../types/address';

export const searchAddress = async ({
  keyword,
  currentPage,
  countPerPage,
}: ReqSearchAddress): Promise<ResSearchAddress> => {
  try {
    const { data } = await axios({
      url: `${import.meta.env.VITE_JUSO_API_URL}/addrLinkApi.do`,
      method: 'get',
      params: {
        keyword,
        currentPage,
        countPerPage,
        confmKey: import.meta.env.VITE_JUSO_ADDRESS_CONFIRM_KEY,
        resultType: 'json',
      },
    });

    return data.results;
  } catch (e) {
    console.error(e);
    throw new Error('Error searchAddress');
  }
};

/**

@param admCd - 행정구역코드
@param rnMgtSn - 도로명코드
@param udrtYn - 지하여부(0:지상, 1:지하)
@param buldMnnm - 건물본번
@param buldSlno - 건물부번
@returns 주소의 경도 위도를 반환하는 함수
*/
export const searchCoordinate = async ({
  admCd,
  rnMgtSn,
  udrtYn,
  buldMnnm,
  buldSlno,
}: ReqSearchCoordinate): Promise<ResSearchCoordinate> => {
  try {
    const { data } = await axios({
      url: `${import.meta.env.VITE_JUSO_API_URL}/addrCoordApi.do`,
      method: 'get',
      params: {
        confmKey: import.meta.env.VITE_JUSO_COORDINATE_CONFIRM_KEY,
        admCd,
        rnMgtSn,
        udrtYn,
        buldMnnm,
        buldSlno,
        resultType: 'json',
      },
    });

    return data.results;
  } catch (e) {
    console.error(e);
    throw new Error('Error searchCoordinate');
  }
};
