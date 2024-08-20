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
