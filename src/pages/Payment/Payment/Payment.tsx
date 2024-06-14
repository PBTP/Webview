import ContentField from '@/components/common/ContentField/ContentField';
import styles from './Payment.module.scss';
import {
  ArrowDownNoTail,
  CheckboxIcon,
  SelectedCheckboxIcon,
  SelectedIcon,
  UnSelectedIcon,
} from '@/icons/icon';
import { useState } from 'react';
import Divider from '@/components/common/Divider/Divider';
import Button from '@/components/common/Button/Button';

const Payment = () => {
  const [cardMethod, setCardMethod] = useState<string>();
  const [instalmentPeriod, setInstalmentPeriod] = useState<number>();
  const [isDefaultPayment, setIsDefaultPayment] = useState<boolean>();

  const paymentButtonDisabled = !cardMethod || !instalmentPeriod;

  return (
    <div className={styles.PaymentWrapper}>
      <section className={styles.PaymentInfoWrapper}>
        <div className={styles.PaymentTooltip}>
          아래 내용이 맞는지 확인해주세요.
        </div>
        <ContentField
          className={styles.PaymentInfoContainer}
          backgroundColor="Gray"
        >
          <div className={styles.PaymentInfoHeader}>개신남 3호점</div>
          <div className={styles.PaymentInfoContent}>
            <div className={styles.PaymentInfoLine}>
              <span>일정</span>
              <span>2023.03.15</span>
              <span>오후 1시</span>
            </div>
            <div className={styles.PaymentInfoLine}>
              <span>위치</span>
              <span>서울시 양천구 근린공원 주차장</span>
            </div>
            <div className={styles.PaymentInfoLine}>
              <span>정보</span>
              <span>중형견 | 장모종</span>
            </div>
          </div>
        </ContentField>
        <div className={styles.PaymentPhoneInfo}>
          <div className={styles.PaymentPhone}>010-7643-0489</div>
          <button className={styles.PaymentPhoneEditButton}>변경</button>
        </div>
        <div className={styles.PaymentRequestInto}>
          <div className={styles.PaymentRequestHeader}>요청사항</div>
          <ContentField
            className={styles.PaymentRequestInputWrapper}
            backgroundColor="Gray"
          >
            <input
              className={styles.PaymentInput}
              placeholder="요청하실 내용을 입력해주세요."
            />
          </ContentField>
        </div>
      </section>
      <div className={styles.PaymentSectionLine} />
      <section className={styles.PaymentMethodWrapper}>
        <div className={styles.PaymentMethodHeader}>결제 수단</div>
        <div className={styles.PaymentMethodContent}>
          <div className={styles.PaymentMethod}>
            <SelectedIcon width={18} height={18} />
            <span>신용카드</span>
          </div>
        </div>
        <div className={styles.PaymentCardWrapper}>
          <div className={styles.PaymentCardContent}>
            <div className={styles.PaymentCardHeader}>카드선택</div>
            <div className={styles.PaymentCardInputWrapper}>
              <input
                placeholder="카드 선택"
                className={styles.PaymentCardInput}
                value={cardMethod}
                readOnly
              />
              <ArrowDownNoTail
                width={12}
                height={7}
                className={styles.PaymentCardInputDownArrow}
              />
            </div>
          </div>
          <div className={styles.PaymentCardContent}>
            <div className={styles.PaymentCardHeader}>할부기간</div>
            <div className={styles.PaymentCardInputWrapper}>
              <input
                placeholder="할부 선택"
                className={styles.PaymentCardInput}
                value={instalmentPeriod}
                readOnly
              />
              <ArrowDownNoTail
                width={12}
                height={7}
                className={styles.PaymentCardInputDownArrow}
              />
            </div>
          </div>
          <div className={styles.PaymentCardContent}>
            <div className={styles.PaymentCardHeader}>사용자이메일</div>
            <div className={styles.PaymentCardInputWrapper}>
              <input
                placeholder="mgmg@mgmg.com"
                className={styles.PaymentCardInput}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.PaymentDefaultContent}
          onClick={() => setIsDefaultPayment((prev) => !prev)}
        >
          {isDefaultPayment ? (
            <SelectedCheckboxIcon width={20} height={20} />
          ) : (
            <CheckboxIcon width={20} height={20} />
          )}

          <span>기본 결제 수단으로 사용</span>
        </div>
        <div className={styles.PaymentMeetAndPay}>
          <UnSelectedIcon width={18} height={18} />
          <span>만나서 결제</span>
        </div>
      </section>
      <div className={styles.PaymentSectionLine} />
      <section className={styles.PaymentAmountWrapper}>
        <div className={styles.PaymentAmountHeader}>결제 금액</div>
        <div className={styles.PaymentAmountContent}>
          <div className={styles.PaymentAmountDetail}>
            <span>중형견</span>
            <span>200,000원</span>
          </div>
          <div className={styles.PaymentAmountDetail}>
            <span>장모종</span>
            <span>50,000원</span>
          </div>
        </div>
        <Divider className={styles.PaymentAmountDivider} />
        <div className={styles.PaymentTotalAmount}>
          <span className={styles.TotalAmountHeader}>총 결제금액</span>
          <span className={styles.TotalAmount}>250,000원</span>
        </div>
      </section>
      <Button
        className={styles.PaymentButton}
        buttonType={paymentButtonDisabled ? 'Disabled' : 'Primary'}
      >
        250,000원 결제하기
      </Button>
    </div>
  );
};

export default Payment;
