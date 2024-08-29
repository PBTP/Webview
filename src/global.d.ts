declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        showInfo: TWebviewFunction;
        getAddressWebview: TWebviewFunction;
        webviewInit: TWebviewFunction;
      };
    };
    handleIosWebviewToken: (token: string, uuid: string) => void;
    iOSToJavaScript: (token: string, uuid: string) => void;
  }

  type TWebviewFunction = {
    postMessage: (message?: string | object) => void;
  };
}

export {};
