export const sendAddressFromWebview = (
  address: string,
  detailAddress: string
) => {
  const formatJsonAddress = JSON.stringify({ address, detailAddress });
  if (window.webkit && address && detailAddress) {
    window.webkit.messageHandlers.getAddressWebview.postMessage(
      formatJsonAddress
    );
    return;
  }
};
