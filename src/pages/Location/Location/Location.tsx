import React, { useRef, useState } from 'react';
import styles from './Location.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';
import { SearchIcon } from '@/icons/icon';
import Button from '@/components/common/Button/Button';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useDebounce } from '@/hooks/useDebounce';
import useAddress from '@/hooks/api/useAddress';
import { sendAddressFromWebview } from '@/webview/address';

const Location = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const debouncedValue = useDebounce(searchKeyword);

  const {
    data: addressData,
    isFetching,
    isError,
  } = useAddress({
    keyword: debouncedValue,
    isSelected,
  });

  const LocationSearchWrapperRef = useRef(null);

  const isShowSearchWrapper = useOutsideClick(LocationSearchWrapperRef);

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
      >
        <SearchIcon width={24} height={24} className={styles.SearchIcon} />
        <input
          className={styles.LocationInput}
          value={searchKeyword}
          placeholder="도로명 주소, 건물명 또는 지번"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onClick={() => setIsSelected(false)}
        />
        {shouldDisplaySearchWrapper && (
          <div className={styles.LocationSearchWrapper}>
            {addressData.juso.map((addressInfo, idx) => (
              <div
                key={`${addressInfo.rnMgtSn}-${addressInfo.zipNo}-${idx}`}
                onClick={() => {
                  setSearchKeyword(`${addressInfo.roadAddr}`);
                  setIsSelected(true);
                }}
                className={styles.LocationSearchItem}
              >
                {addressInfo.roadAddr}
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
        onClick={() => sendAddressFromWebview(searchKeyword)}
      >
        확인
      </Button>
    </div>
  );
};

export default Location;
