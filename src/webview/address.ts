export const sendAddressFromWebview = (
  address: string,
  detailAddress: string
) => {
  if (window.webkit && address && detailAddress) {
    window.webkit.messageHandlers.getAddressWebview.postMessage(
      `${address},${detailAddress}`
    );
    return;
  }
};
