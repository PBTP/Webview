import { TReqSearchAddress } from '@/hooks/api/useAddress';
import checkSearchedWord from '@/utils/format';
import axios from 'axios';
import { TAddressCommon, TJuso } from './types/addressTypes';

type TResSearchAddress = {
  common: TAddressCommon;
  juso: TJuso[];
};

export const searchAddress = async ({
  keyword,
  currentPage,
  countPerPage,
}: TReqSearchAddress) => {
  if (!checkSearchedWord(keyword)) return;

  try {
    const { data } = await axios({
      url: 'https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do',
      method: 'get',
      params: {
        keyword,
        currentPage,
        countPerPage,
        confmKey: 'devU01TX0FVVEgyMDI0MDcwODE3MDAzNTExNDkwMTE=',
        resultType: 'json',
      },
    });
    const jsonpData = data.replace(/\(|\)/g, '');
    const jsonData = JSON.parse(jsonpData);
    const resultData = jsonData.results as TResSearchAddress;
    return resultData;
  } catch (e) {
    console.log(e);
    throw new Error('Error searchAddress');
  }
};
