export const showiOSInfo = (info: unknown) => {
  if (window.webkit && info) {
    const formatIosInfo = JSON.stringify(info);
    window.webkit.messageHandlers.showInfo.postMessage(formatIosInfo);
  }
  return;
};

export const webviewInit = () => {
  if (window.webkit) {
    window.webkit.messageHandlers.webviewInit.postMessage('초기설정');
  }
  return;
};
