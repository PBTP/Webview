import React, { ChangeEvent, useState } from 'react';
import styles from './Login.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';
import CheckBox from '@/components/common/Checkbox/CheckBox';
import Button from '@/components/common/Button/Button';
import VerticalDivider from '@/components/common/VerticalDivider/VerticalDivider';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    userId: '',
    password: '',
  });

  const [isAutoLogin, setIsAutoLogin] = useState<boolean>(false);

  const handleLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  const disabledLoginButton = loginInfo.userId && loginInfo.password;

  return (
    <div>
      <ContentField
        backgroundColor="White"
        border="Border"
        className={styles.InputWrapper}
      >
        <input
          onChange={(e) => handleLoginInfo(e)}
          name="userId"
          className={styles.Input}
          placeholder="아이디"
        />
      </ContentField>
      <ContentField
        backgroundColor="White"
        border="Border"
        className={styles.InputWrapper}
      >
        <input
          onChange={(e) => handleLoginInfo(e)}
          name="password"
          className={styles.Input}
          type="password"
          placeholder="비밀번호"
        />
      </ContentField>

      <div
        onClick={() => setIsAutoLogin((prev) => !prev)}
        className={styles.LoginAutoLine}
      >
        <CheckBox isSelected={isAutoLogin} width={20} height={20} />
        <span className={styles.LoginAutoText}>자동 로그인</span>
      </div>

      <Button
        className={styles.LoginButton}
        buttonType={disabledLoginButton ? 'Primary' : 'Disabled'}
      >
        로그인
      </Button>
      <div className={styles.LoginNavLine}>
        <span>아이디찾기</span>
        <VerticalDivider height={13} />
        <span>비밀번호 찾기</span>
        <VerticalDivider height={13} />
        <span>회원가입</span>
      </div>
    </div>
  );
};

export default Login;
