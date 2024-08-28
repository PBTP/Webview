export const showiOSInfo = (info: unknown) => {
  alert('테스트');
  const formatIosInfo = JSON.stringify(info);
  window.webkit.messageHandlers.showInfo.postMessage(formatIosInfo);
  if (window.webkit && info) {
    const formatIosInfo = JSON.stringify(info);
    window.webkit.messageHandlers.showInfo.postMessage(formatIosInfo);
  }
  return;
};
