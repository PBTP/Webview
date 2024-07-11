export const sendAddressFromWebview = (address: string) => {
  if (window.webkit && address) {
    window.webkit.messageHandlers.getAddressWebview.postMessage(address);
    return;
  }
};
