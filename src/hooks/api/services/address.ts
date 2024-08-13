import checkSearchedWord from '@/utils/format';
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
}: ReqSearchAddress): Promise<ResSearchAddress | void> => {
  if (!checkSearchedWord(keyword)) return;

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
