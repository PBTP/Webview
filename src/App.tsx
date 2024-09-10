import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo } from './webview/utils';

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
  return <RootRouter />;
}

export default App;
