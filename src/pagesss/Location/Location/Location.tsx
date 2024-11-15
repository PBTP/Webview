import Button from '@/components/ui/common/Button/Button';
import ContentField from '@/components/ui/common/ContentField/ContentField';
import { SearchIcon } from '@/components/ui/icons/icon';
import { SearchAddressJuso } from '@/hooks/api/types/address';
import { useAddress, useCoordinate } from '@/hooks/api/useAddress';
import { useDebounce } from '@/hooks/useDebounce';
import useOutsideClick from '@/hooks/useOutsideClick';
import { foramtSearchWord } from '@/utils/format';
import { sendAddressFromWebview } from '@/webview/address';
import { useRef, useState } from 'react';
import styles from './Location.module.scss';

const Location = () => {
  const [addressInfo, setAddressInfo] = useState({
    keyword: '',
    admCd: '',
    rnMgtSn: '',
    udrtYn: '',
    buldMnnm: '',
    buldSlno: '',
  });

  const { keyword, admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno } = addressInfo;

  const [detailAddress, setDetailAddress] = useState<string>('');
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isShowSearchWrapper, setIsShowSearchWrapper] = useState<boolean>(true);

  const debouncedValue = useDebounce(keyword);

  const {
    data: addressData,
    isFetching,
    isError,
  } = useAddress({
    keyword: debouncedValue,
    isSelected,
  });

  const { data: coordinateData } = useCoordinate({
    admCd,
    rnMgtSn,
    udrtYn,
    buldMnnm,
    buldSlno,
  });

  const onClickJusoInfo = (juso: SearchAddressJuso) => {
    const { roadAddr, admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno } = juso;

    setAddressInfo({
      keyword: roadAddr,
      admCd,
      rnMgtSn,
      udrtYn,
      buldMnnm,
      buldSlno,
    });
    setIsSelected(true);
  };

  const handleWebviewAddressInfo = () => {
    if (coordinateData) {
      const filteredCoordinateData = {
        entX: coordinateData.data.entX,
        entY: coordinateData.data.entY,
      };
      sendAddressFromWebview(keyword, detailAddress, filteredCoordinateData);
    }
  };

  const LocationSearchWrapperRef = useRef(null);

  useOutsideClick(LocationSearchWrapperRef, () =>
    setIsShowSearchWrapper(false)
  );

  const shouldDisplaySearchWrapper =
    addressData &&
    addressData.juso.length > 0 &&
    isShowSearchWrapper &&
    !isSelected;

  const shouldDisplayEmptyDescription = isError;

  return (
    <div>
      <ContentField
        ref={LocationSearchWrapperRef}
        backgroundColor="Gray"
        className={styles.LocationInfoField}
        onClick={() => setIsShowSearchWrapper(true)}
      >
        <SearchIcon width={24} height={24} className={styles.SearchIcon} />
        <input
          className={styles.LocationInput}
          value={keyword}
          placeholder="도로명 주소, 건물명 또는 지번"
          onChange={(e) =>
            setAddressInfo({
              ...addressInfo,
              keyword: foramtSearchWord(e.target.value),
            })
          }
          onClick={() => setIsSelected(false)}
        />
        {shouldDisplaySearchWrapper && (
          <div className={styles.LocationSearchWrapper}>
            {addressData.juso.map((juso, idx) => (
              <div
                key={`${juso.rnMgtSn}-${juso.zipNo}-${idx}`}
                onClick={() => {
                  onClickJusoInfo(juso);
                }}
                className={styles.LocationSearchItem}
              >
                {juso.roadAddr}
              </div>
            ))}
          </div>
        )}
      </ContentField>

      <div className={styles.LocationDetailContent}>
        <div className={styles.LocationDetailHeader}>상세주소</div>
        <ContentField
          backgroundColor="Gray"
          className={styles.LocationDetailAddress}
        >
          <input
            className={styles.LocationDetailAddressInput}
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </ContentField>
      </div>

      {shouldDisplayEmptyDescription && (
        <div className={styles.LocationEmptyContent}>
          <div>검색 결과가 없어요.</div>
          <div>도로명 주소를 다시 확인해주세요.</div>
        </div>
      )}

      {isFetching && (
        <div className={styles.LocationEmptyContent}>
          <div>주소를 검색중입니다...</div>
        </div>
      )}

      <Button
        className={styles.LocationButton}
        buttonType={isSelected && detailAddress ? 'Primary' : 'Disabled'}
        onClick={handleWebviewAddressInfo}
      >
        확인
      </Button>
    </div>
  );
};

export default Location;
