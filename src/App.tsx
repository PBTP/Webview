import { useEffect } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth, useAuthStore } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';
import { useSocket } from './hooks/socket/useSocket';

if (!window.handleIosWebviewToken) {
  window.handleIosWebviewToken = (token, uuid) => {
    showiOSInfo(`token:${token},uuid:${uuid}`);
    if (token) {
      setUserAuth(token, uuid);
      return 'success';
    }
    return 'fail';
  };
}

function App() {
  const token = useAuthStore((state) => state.accessToken);
  const { socket } = useSocket();

  useEffect(() => {
    const handleAuthUpdate = (event: CustomEvent) => {
      console.log('Auth updated:', event.detail);
      if (socket) {
        socket.disconnect();
        socket.connect();
      }
    };

    window.addEventListener('auth-update', handleAuthUpdate as EventListener);

    if (window.webkit?.messageHandlers.webviewInit) {
      window.webkit.messageHandlers.webviewInit.postMessage('webviewReady');
    }

    return () => {
      window.removeEventListener(
        'auth-update',
        handleAuthUpdate as EventListener
      );
    };
  }, [socket, token]);

  return <RootRouter />;
}

export default App;
