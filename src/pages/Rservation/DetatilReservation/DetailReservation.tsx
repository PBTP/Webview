import React from 'react';

import styles from './DetailRservation.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';

const DetailReservation = () => {
  // const location = useLocation();
  return (
    <div>
      <ContentField
        className={`${styles.EstimatedPriceWrapper}`}
        backgroundColor="Gray"
      >
        <div className={styles.EstimatedPriceTitle}>나의 결제 예상 금액</div>
        <div className={styles.EstimatedPriceContainer}>
          <div className={styles.EstimatedPrice}>250,000원</div>
          <div className={styles.PetTypeContent}>
            <div>중형견</div>
            <div className={styles.VerticalDivider} />
            <div>장모종</div>
          </div>
        </div>
      </ContentField>
      <div className={styles.ReservationWrapper}>
        <div className={styles.Title}>예약 일정</div>
        <ContentField className={styles.DateContent} backgroundColor="Gray">
          <div>달력 아이콘</div>
          <div className={styles.Date}>2023.03.15 오후 1:00</div>
        </ContentField>
      </div>
      <div className={styles.ParkingInfoWrapper}>
        <div className={styles.Title}>방문 주차 위치</div>
        <ContentField className={styles.ParkingInfo} backgroundColor="Gray">
          <div>지도 아이콘</div>
          <div className={styles.Address}>서울시 양천구 목동</div>
        </ContentField>
        <ContentField className={styles.DetailAddress} backgroundColor="Gray">
          <input placeholder="상세주소 입력" />
        </ContentField>
      </div>
      <div>
        <div>
          <div>체크박스</div>
          <div>주차 공간이 마련되어 있습니다.</div>
        </div>
        <div>
          위 내용을 사실과 다르게 기재한 경우, 서비스 이용에 제한이 있을 수
          있습니다.
        </div>
      </div>
      <div>
        <div>
          <div>반려 동물 정보</div>
          <button>추가하기</button>
        </div>
        {/* 있을떄 */}
        <div>반려 동물을 등록해보세요.</div>
        <button>등록하기</button>
        {/* 없을때 */}
        <div>
          <div>강아지사진</div>
          <div>
            <div>
              <div>
                <span>김뽀삐</span>
                <span>성별 아이콘</span>
              </div>
              <div>수정(연필) 아이콘</div>
            </div>
            <div>
              <div>시고르자브종</div>
              <div>|</div>
              <div>3년 4개월</div>
              <div>|</div>
              <div>3kg</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>성향 체크</div>
            <div>완료</div>
          </div>
          <div>
            <div>접종 및 건강</div>
            <div>완료</div>
          </div>
        </div>
      </div>
      <div>
        <div>업체 규정 확인</div>
        <div>
          <div>체크박스</div>
          <div>업체 규정 및 약관을 확인했습니다.</div>
        </div>
        <div>
          위 내용을 사실과 다르게 기재한 경우, 서비스 이용에 제한이 있을 수
          있습니다.
        </div>
      </div>
    </div>
  );
};

export default DetailReservation;
