declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        buttonClicked: {
          postMessage: (message: string) => void;
        };
      };
    };
    iOSToJavaScript: (token: string) => void;
  }
}

export {};
