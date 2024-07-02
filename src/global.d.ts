declare global {
  interface Window {
    webkit: Webkit;
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
