import { useEffect, useState } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';
function App() {
  const handleIosWebviewToken = (token: string, uuid: string) => {
    showiOSInfo(`token:${token}, uuid:${uuid}`);
    if (token && uuid) {
      setUserAuth(token, uuid);
    }
  };
  window.handleIosWebviewToken = handleIosWebviewToken;
  // window.iOSToJavaScript = handleIosWebviewToken;

  return <RootRouter />;
}

export default App;
