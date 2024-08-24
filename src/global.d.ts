declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        buttonClicked: TWebviewFunction;
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
