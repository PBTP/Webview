export function foramtSearchWord(keyword: string): string {
  if (keyword.length > 0) {
    //특수문자 제거
    const expText = /[%=><!@#$^&*]/;
    if (expText.test(keyword) == true) {
      alert('특수문자를 입력 할수 없습니다.');
      return removeSpecialCharacters(keyword);
    }

    //특정문자열(sql예약어의 앞뒤공백포함) 제거
    const sqlArray = [
      'OR',
      'SELECT',
      'INSERT',
      'DELETE',
      'UPDATE',
      'CREATE',
      'DROP',
      'EXEC',
      'UNION',
      'FETCH',
      'DECLARE',
      'TRUNCATE',
    ];

    let regex;

    for (let i = 0; i < sqlArray.length; i++) {
      regex = new RegExp(sqlArray[i], 'gi');

      if (regex.test(keyword)) {
        alert(
          '"' + sqlArray[i] + '"와(과) 같은 특정문자로 검색할 수 없습니다.'
        );
        keyword = keyword.replace(regex, '');
        return keyword;
      }
    }
  }
  return keyword;
}

export function removeSpecialCharacters(str: string): string {
  return str.replace(/[%=><!@#$^&*]/g, '');
}

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_MONTH = 30 * ONE_DAY;

export const formatChatDate = (dateString: Date): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // 59초 이내
  if (diff < ONE_MINUTE) {
    return '방금 전';
  }

  // 당일 (1분 ~ 23:59)
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours < 12 ? '오전' : '오후';
    const displayHours = hours % 12 || 12; // 12시간제로 변환 (0을 12로)

    return `${period} ${displayHours}:${minutes}`;
  }

  // 어제~30일 전
  if (diff < ONE_MONTH) {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  }

  // 1달 이후
  const monthsDiff = Math.floor(diff / ONE_MONTH);
  return `${monthsDiff}달 전`;
};
