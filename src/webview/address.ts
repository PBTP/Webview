export const sendAddressFromWebview = (
  address: string,
  detailAddress: string
) => {
  alert(`${address},${detailAddress}`);
  if (window.webkit && address && detailAddress) {
    window.webkit.messageHandlers.getAddressWebview.postMessage({
      address,
      detailAddress,
    });
    return;
  }
};
