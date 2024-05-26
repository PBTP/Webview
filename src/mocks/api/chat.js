const getChatRooms = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        imgSrc:
          'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
        roomId: '1a2',
        storeName: '개신남 10호점',
        lastDate: '2024-04-10',
        recentChat: '아하 네 알겠습니다 ㅎㅎ',
        unViewedMsgCount: 2,
      },
      {
        imgSrc:
          'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
        roomId: '1a3',
        storeName: '개신남 5호점',
        lastDate: '2024-04-20',
        recentChat: '좋습니다.',
        unViewedMsgCount: 2,
      },
      {
        imgSrc:
          'https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp',
        roomId: '1a4',
        storeName: '개신남 1호점',
        lastDate: '2024-04-31',
        recentChat: '감사합니다 ㅎㅎ',
        unViewedMsgCount: 2,
      },
    ])
  );
};

export const chatApiList = {
  getChatRooms,
};
