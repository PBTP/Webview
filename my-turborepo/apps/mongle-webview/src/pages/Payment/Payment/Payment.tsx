import ContentField from '@/components/common/ContentField/ContentField';
import styles from './Payment.module.scss';
import {
  CheckboxIcon,
  SelectedCheckboxIcon,
  SelectedIcon,
  UnSelectedIcon,
} from '@/icons/icon';
import { useState } from 'react';
import Divider from '@/components/common/Divider/Divider';
import Button from '@/components/common/Button/Button';
import PaymentLoading from '../PaymentLoading/PaymentLoading';
import Dropdown from '@/components/common/Dropdown/Dropdown';

const Payment = () => {
  const cardMethods = ['국민은행', '신한은행', '우리은행', '기업은행'];
  const installmentPeriods = ['일시불', '1개월', '2개월', '3개월'];

  const [paymentInfo, setPaymentInfo] = useState({
    cardMethod: '',
    installmentPeriod: '',
    email: '',
    isDefaultPayment: false,
  });

  const paymentButtonDisabled =
    !paymentInfo.cardMethod || !paymentInfo.installmentPeriod;

  const handlePaymentInfo = (
    type: 'cardMethod' | 'installmentPeriod' | 'email' | 'isDefaultPayment',
    value: string | boolean
  ) => {
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [type]: value,
    }));
  };

  //결제 api 붙이면 react-query에서 가져와야함
  const isLoading = false;

  return isLoading ? (
    <PaymentLoading />
  ) : (
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
            <Dropdown className={styles.PaymentCardDropdownWrapper}>
              <Dropdown.Trigger
                placeholder="카드선택"
                className={styles.PaymentCardDropdown}
              />
              <Dropdown.Popover>
                {cardMethods.map((card) => (
                  <Dropdown.PopoverItem
                    className={styles.PaymentCardDropdownItem}
                    value={card}
                    onClick={() => handlePaymentInfo('cardMethod', card)}
                  />
                ))}
              </Dropdown.Popover>
            </Dropdown>
          </div>
          <div className={styles.PaymentCardContent}>
            <div className={styles.PaymentCardHeader}>할부기간</div>
            <Dropdown className={styles.PaymentCardDropdownWrapper}>
              <Dropdown.Trigger
                placeholder="할부선택"
                className={styles.PaymentCardDropdown}
              />
              <Dropdown.Popover>
                {installmentPeriods.map((instalment) => (
                  <Dropdown.PopoverItem
                    className={styles.PaymentCardDropdownItem}
                    value={instalment}
                    onClick={() =>
                      handlePaymentInfo('installmentPeriod', instalment)
                    }
                  />
                ))}
              </Dropdown.Popover>
            </Dropdown>
          </div>
          <div className={styles.PaymentCardContent}>
            <div className={styles.PaymentCardHeader}>사용자이메일</div>
            <div className={styles.PaymentCardInputWrapper}>
              <input
                placeholder="mgmg@mgmg.com"
                className={styles.PaymentCardInput}
                onChange={(e) => handlePaymentInfo('email', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.PaymentDefaultContent}
          onClick={() =>
            handlePaymentInfo('isDefaultPayment', !paymentInfo.isDefaultPayment)
          }
        >
          {paymentInfo.isDefaultPayment ? (
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
