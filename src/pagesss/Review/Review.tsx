import ReviewInfo from '@/components/ReviewInfo/ReviewInfo';
import Button from '@/components/ui/common/Button/Button';
import CameraIcon from '@/components/ui/icons/icon/CameraIcon';
import { useEffect, useState } from 'react';
import styles from './Review.module.scss';

const ReviewPage = () => {
  const [step, setStep] = useState<'SURVEY' | 'REVIEW'>('SURVEY');
  // review data 형식을 모르기 떄문에 any 선언
  const [reviewData, setReviewData] = useState<any>({
    text: '',
  });
  const initialButtonStates = new Array(8).fill('Survey');
  const [buttonStates, setButtonStates] = useState(initialButtonStates);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const handleSurveyButtonClick = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] =
      newButtonStates[index] === 'Survey' ? 'SurveyActive' : 'Survey';
    setButtonStates(newButtonStates);
  };

  const handleReivewText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReviewData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * 버튼안에 데이터 형식이 정해지면 아래 validate형식이 바뀔 수도 있습니다!
   * initialButtonStates 배열 친구들도 포함입니다!
   */
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
                  onClick={() => handleSurveyButtonClick(row)}
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
                  onClick={() => handleSurveyButtonClick(row)}
                >
                  꼼꼼한 목욕
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.NavigateWrap}>
            <Button buttonType="Disabled">취소</Button>
            <Button
              buttonType={isNextButtonEnabled ? 'Primary' : 'Disabled'}
              onClick={() => {
                setStep('REVIEW');
              }}
            >
              다음
            </Button>
          </div>
        </>
      )}
      {step === 'REVIEW' && (
        <div className={styles.ReviewSurveyWrapper}>
          <div className={styles.ReviewSurveyVisitCount}>1번째 방문</div>
          <div className={styles.ReviewSurveyMainTitle}>
            개신남 10호점’의 사진/영상을 등록해주세요
          </div>
          <div className={styles.ReviewSurveySubTitle}>최대 5개 선택 가능</div>
          {/* 아래 버튼 클릭하면 아이폰에서는 바로 이미지로 접근가능하지만 웹뷰에서는 앨범으로 바로 접근 힘듬 TODO
            그래서 ios측으로 앨범을 선택하고 이미지 파일을 보낸다.
          */}
          <div className={styles.ReviewPhotoWrapper}>
            <CameraIcon width={24} height={24} stroke="#8B95A1" />
          </div>
          <div className={styles.ReviewSurveyMainTitle}>
            개신남 10호점’의 리뷰를 작성해 주세요
          </div>
          <div className={styles.ReviewTextWrap}>
            <textarea
              className={styles.ReviewText}
              placeholder="리뷰 작성 시 사업자에게 상처가 되는 욕설, 비방, 명예훼손성 표현은 삼가주세요."
              rows={4}
              name="text"
              onChange={handleReivewText}
            ></textarea>
            <div className={styles.ReviewTextLength}>
              {reviewData.text.length} / 400
            </div>
          </div>
          <div className={styles.NavigateWrap}>
            <Button buttonType="Disabled">이전</Button>
            <Button buttonType={isNextButtonEnabled ? 'Primary' : 'Disabled'}>
              등록
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewPage;
