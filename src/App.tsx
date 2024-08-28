import { useEffect, useState } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';
function App() {
  const handleIosWebviewToken = (token: string) => {
    showiOSInfo(`token:${token}`);
    if (token) {
      setUserAuth(token);
      return 'success';
    }
    return 'fail';
  };

  window.handleIosWebviewToken = handleIosWebviewToken;

  return <RootRouter />;
}

export default App;
