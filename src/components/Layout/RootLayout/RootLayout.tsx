// import React, { Suspense } from 'react';

// import styles from './RootLayout.module.scss';
// // import { Outlet } from 'react-router-dom';
// import { useAuthStore } from '@/stores/useAuthStore';
// import { showiOSInfo, webviewInit } from '@/webview/utils';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorPage from '@/pages/Error/ErrorPage';
// import LoadingSpinner from '@/pages/Loading/LoadingSpinner';

// const RootLayout = () => {
//   const { accessToken, uuid } = useAuthStore((state) => state);
//   return (
//     <div className={styles.RootLayout}>
//       <div>
//         <div>Token: {accessToken}</div>
//         <div>uuid: {uuid}</div>
//         <button onClick={() => showiOSInfo(`${accessToken},uuid:${uuid}`)}>
//           확인
//         </button>
//         <button onClick={webviewInit}>초기설정</button>
//       </div>
//       <ErrorBoundary fallback={<ErrorPage />}>
//         <Suspense fallback={<LoadingSpinner />}>
//           {/* <Outlet /> */}
//         </Suspense>
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default RootLayout;
