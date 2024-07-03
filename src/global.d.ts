declare global {
  interface Window {
    webkit: Webkit;
    iOSToJavaScript: (token: string) => void;
  }

  interface Webkit {
    messageHandlers?: MessageHandlers;
  }

  interface MessageHandlers {
    buttonClicked?: {
      postMessage: (message: string) => void;
    };
  }
}

export {};
