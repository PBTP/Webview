declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        buttonClicked: TWebviewFunction;
        getAddressWebview: TWebviewFunction;
      };
    };
    iOSToJavaScript: (token: string) => void;
  }

  type TWebviewFunction = {
    postMessage: (message: string) => void;
  };
}

export {};
