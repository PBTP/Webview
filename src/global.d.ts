declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        showInfo: TWebviewFunction;
        getAddressWebview: TWebviewFunction;
      };
    };
    iOSToJavaScript: (token: string, uuid: string) => void;
  }

  type TWebviewFunction = {
    postMessage: (message: string | object) => void;
  };
}

export {};
