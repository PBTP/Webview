import { useEffect, useState } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo, webviewInit } from './webview/utils';
function App() {
  const handleIosWebviewToken = (token: string, uuid: string) => {
    showiOSInfo(`token:${token},uuid:${uuid}`);
    if (token) {
      setUserAuth(token, uuid);
      return 'success';
    }
    return 'fail';
  };

  useEffect(() => {
    window.handleIosWebviewToken = handleIosWebviewToken;
    webviewInit();
  }, []);

  return <RootRouter />;
}

export default App;
