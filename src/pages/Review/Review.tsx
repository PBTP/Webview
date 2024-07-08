import { DeleteXIcon } from '@/icons/icon';
import styles from './Review.module.scss';
import ReviewInfo from '@/components/ReviewInfo/ReviewInfo';
import { useState, useEffect } from 'react';
import Button from '@/components/common/Button/Button';

const ReviewPage = () => {
  const [step, setStep] = useState<'SURVEY' | 'REVIEW'>('SURVEY');
  const [reviewData, setReviewData] = useState<any>();

  const initialButtonStates = new Array(8).fill('Survey');
  const [buttonStates, setButtonStates] = useState(initialButtonStates);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const handleButtonClick = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] =
      newButtonStates[index] === 'Survey' ? 'SurveyActive' : 'Survey';
    setButtonStates(newButtonStates);
  };

  useEffect(() => {
    const hasFacilityActive = buttonStates.slice(0, 4).includes('SurveyActive');
    const hasServiceActive = buttonStates.slice(4, 8).includes('SurveyActive');
    setIsNextButtonEnabled(hasFacilityActive && hasServiceActive);
  }, [buttonStates]);

  return (
    <>
      <ReviewInfo />
      <div className="Divider Review" />
      {step === 'SURVEY' && (
        <>
          <div className={styles.ReviewSurveyWrapper}>
            <div className={styles.ReviewSurveyVisitCount}>1번째 방문</div>
            <div className={styles.ReviewSurveyMainTitle}>
              개신남 10호점’의 서비스가 어떠셨나요?
            </div>
            <div className={styles.ReviewSurveySubTitle}>
              어울리는 키워드를 골라주세요 (1개~5개)
            </div>
            <div className={styles.ReviewSelectTitle}>시설</div>
            <div className={styles.ReviewSelectButtonWrapper}>
              {[0, 1, 2, 3].map((row, index) => (
                <Button
                  key={index}
                  buttonType={buttonStates[row]}
                  className={styles.ReviewSelectButton}
                  onClick={() => handleButtonClick(row)}
                >
                  청결한 트럭
                </Button>
              ))}
            </div>
            <div className={styles.ReviewSelectTitle}>서비스</div>
            <div className={styles.ReviewSelectButtonWrapper}>
              {[4, 5, 6, 7].map((row, index) => (
                <Button
                  key={index}
                  buttonType={buttonStates[row]}
                  className={styles.ReviewSelectButton}
                  onClick={() => handleButtonClick(row)}
                >
                  꼼꼼한 목욕
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.NavigateWrap}>
            <Button buttonType="Disabled">취소</Button>
            <Button buttonType={isNextButtonEnabled ? 'Primary' : 'Disabled'}>
              다음
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default ReviewPage;
