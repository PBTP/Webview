import { useEffect } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';

const AUTH_UPDATE_EVENT = 'authUpdate';

if (!window.handleIosWebviewToken) {
  window.handleIosWebviewToken = (token, uuid) => {
    showiOSInfo(`token:${token},uuid:${uuid}`);
    if (token) {
      setUserAuth(token, uuid);
      window.dispatchEvent(
        new CustomEvent(AUTH_UPDATE_EVENT, {
          detail: { token, uuid },
        })
      );
      return 'success';
    }
    return 'fail';
  };
}

function App() {
  useEffect(() => {
    const handleAuthUpdate = (event: CustomEvent) => {
      const { token, uuid } = event.detail;
      console.log('Auth updated:', token, uuid);
    };

    window.addEventListener(
      AUTH_UPDATE_EVENT,
      handleAuthUpdate as EventListener
    );

    if (window.webkit?.messageHandlers.webviewInit) {
      window.webkit.messageHandlers.webviewInit.postMessage('webviewReady');
    }

    return () => {
      window.removeEventListener(
        AUTH_UPDATE_EVENT,
        handleAuthUpdate as EventListener
      );
    };
  }, []);
  return <RootRouter />;
}

export default App;
