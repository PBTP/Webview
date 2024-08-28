import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
function App() {
  const handleIosWebviewToken = (token: string, uuid: string) => {
    if (token) setUserAuth(token, uuid);
  };

  window.iOSToJavaScript = handleIosWebviewToken;

  return <RootRouter />;
}

export default App;
