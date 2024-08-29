import { JusoBase, SearchCoordinateJuso } from '@/hooks/api/types/address';

export const sendAddressFromWebview = (
  address: string,
  detailAddress: string,
  coordinate: Omit<SearchCoordinateJuso, keyof JusoBase>
) => {
  const coordinateInfo = {
    latitude: coordinate.entY,
    longitude: coordinate.entX,
  };
  const formatJsonAddress = JSON.stringify({
    address,
    detailAddress,
    coordinateInfo,
  });
  if (window.webkit && address && detailAddress) {
    window.webkit.messageHandlers.getAddressWebview.postMessage(
      formatJsonAddress
    );
    return;
  }
};
