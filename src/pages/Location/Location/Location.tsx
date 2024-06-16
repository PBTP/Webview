import React, { useRef, useState } from 'react';
import styles from './Location.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';
import { SearchIcon, TargetIcon } from '@/icons/icon';
import Button from '@/components/common/Button/Button';
import useOutsideClick from '@/hooks/useOutsideClick';

const Location = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [detailAddress, setDetailAddress] = useState<string>();

  const LocationSearchWrapperRef = useRef(null);
  const dumyLocationData = [
    '서울시 중구 통일로 1',
    '서울시 중구 통일로 2',
    '서울시 중구 통일로 3',
    '서울시 중구 통일로 4',
  ];

  const isShowSearchWrapper = useOutsideClick(LocationSearchWrapperRef);
  const shouldDisplaySearchWrapper = searchValue && isShowSearchWrapper;

  // api 쿼리 결과 없으면 true로 바꿔줘야함
  const shouldDisplayEmptyDescription = false;

  return (
    <div>
      <ContentField backgroundColor="Gray" className={styles.LocationInfoField}>
        <SearchIcon width={24} height={24} className={styles.SearchIcon} />
        <input
          className={styles.LocationInput}
          value={searchValue}
          placeholder="도로명 주소, 건물명 또는 지번"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {shouldDisplaySearchWrapper && (
          <div
            ref={LocationSearchWrapperRef}
            className={styles.LocationSearchWrapper}
          >
            {dumyLocationData.map((location) => (
              <div
                onClick={() => setSearchValue(location)}
                className={styles.LocationSearchItem}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </ContentField>

      {searchValue && (
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
      )}

      <div className={styles.LocationCurrentContent}>
        <TargetIcon width={24} height={24} />
        <div>현재 위치로 지정</div>
      </div>

      {shouldDisplayEmptyDescription && (
        <div className={styles.LocationEmptyContent}>
          <div>검색 결과가 없어요.</div>
          <div>도로명 주소를 다시 확인해주세요.</div>
        </div>
      )}

      <Button
        className={styles.LocationButton}
        buttonType={searchValue ? 'Primary' : 'Disabled'}
      >
        확인
      </Button>
    </div>
  );
};

export default Location;
