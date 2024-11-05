import { useEffect, useRef } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth, useAuthStore } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';
import { useSocket } from './hooks/socket/useSocket';

// 전역 변수로 초기 토큰 저장
let initialToken: string | null = null;
let initialUuid: string | null = null;

if (!window.handleIosWebviewToken) {
  window.handleIosWebviewToken = (token, uuid) => {
    showiOSInfo(`token:${token},uuid:${uuid}`);
    if (token) {
      // 초기 토큰 저장
      initialToken = token;
      initialUuid = uuid;
      setUserAuth(token, uuid);
      return 'success';
    }
    return 'fail';
  };
}

function App() {
  const token = useAuthStore((state) => state.accessToken);
  const { socket } = useSocket();
  const isInitialized = useRef(false);

  // 초기화 useEffect
  useEffect(() => {
    if (!isInitialized.current && initialToken && initialUuid) {
      console.log('Initializing with stored token');
      setUserAuth(initialToken, initialUuid);
      isInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    const handleAuthUpdate = (event: CustomEvent) => {
      console.log('Auth updated:', event.detail);
      if (socket) {
        console.log('Reconnecting socket');
        socket.disconnect();
        socket.connect();
      }
    };

    window.addEventListener('auth-update', handleAuthUpdate as EventListener);

    // WebView 준비 상태 알림
    if (window.webkit?.messageHandlers.webviewInit) {
      console.log('Sending webviewReady');
      window.webkit.messageHandlers.webviewInit.postMessage('webviewReady');
    }

    return () => {
      window.removeEventListener(
        'auth-update',
        handleAuthUpdate as EventListener
      );
    };
  }, [socket, token]);

  // 디버깅을 위한 토큰 상태 로깅
  useEffect(() => {
    console.log('Current token:', token);
  }, [token]);

  return <RootRouter />;
}

export default App;
