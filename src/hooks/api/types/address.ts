export interface AddressCommonBase {
  errorMessage: string;
  totalCount: string;
  errorCode: string;
}

export interface JusoBase {
  admCd: string;
  rnMgtSn: string;
  bdMgtSn: string;
  udrtYn: string;
  buldMnnm: string;
  buldSlno: string;
  bdNm: string;
}
// Common 타입 정의
export interface SearchAddressCommon extends AddressCommonBase {
  countPerPage: string;
  currentPage: string;
}

// Juso 타입 정의
export interface SearchAddressJuso extends JusoBase {
  detBdNmList: string;
  engAddr: string;
  rn: string;
  emdNm: string;
  zipNo: string;
  roadAddrPart2: string;
  emdNo: string;
  sggNm: string;
  jibunAddr: string;
  siNm: string;
  roadAddrPart1: string;
  lnbrMnnm: string;
  roadAddr: string;
  lnbrSlno: string;
  bdKdcd: string;
  liNm: string;
  mtYn: string;
}

export interface ReqSearchAddress {
  keyword: string;
  currentPage?: number;
  countPerPage?: number;
  isSelected?: boolean;
}

export interface ResSearchAddress {
  common: SearchAddressCommon;
  juso: SearchAddressJuso[];
}

export interface ReqSearchCoordinate {
  admCd: string;
  rnMgtSn: string;
  udrtYn: string;
  buldMnnm: string;
  buldSlno: string;
}

export interface SearchCoordinateJuso extends JusoBase {
  entX: string;
  entY: string;
}

export interface SearchCoordinateCommon extends AddressCommonBase {}

export interface ResSearchCoordinate {
  common: SearchCoordinateCommon;
  juso: SearchCoordinateJuso[];
}
