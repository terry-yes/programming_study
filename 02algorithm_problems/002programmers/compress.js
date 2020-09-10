//string은 size만큼의 덩이로 나누는 함수
function splitString (string, size) {
  let result = [];

  let i = 0;
  while (i * size < string.length) {
    let chunk = string.substring(i * size, (i + 1) *size);// '문자열'.substring(i, j) -> 문자열을 i번째부터 j번재 직전까지 추출함
    result.push(chunk);
    i++;
  }
  return (result);
}

function solution(s) {
  let candidate = []; //단위별로 압축한 결과의 size를 저장할 배열

  for (let i = 1; i <= Math.ceil(s.length / 2); i++) {
    // 절반까지만 한 이유는 절반 이상의 사이즈 단위로 압축하면 압축이 안되므로
    // 예를 들어 'abcde'를 3개로 쪼개면 abc, de인데 abc와 중복되는게 생길수가 없음 (뒷 절반 size가 앞절반 size보다 작으므로)
    let splited = splitString(s, i); //s를 i개씩으로 잘라주는 함수
    let str = '';
    let count = 1;

    let j = 0;
    while (j < splited.length) {
      if (splited[j] == splited[j + 1]) { //이번 단위와 다음 단위가 같으면 count++
        count++;
      } else {  //그렇지 않으면 str에 압축된거 저장
        if (count == 1) { //1개는 숫자 안씀
          str += splited[j];
        } else {
          str += count + splited[j]; //중복횟수 + 문자열
        }
        count = 1;
      }
      j++;
    }
    candidate.push(str.length); //압축된 문자열의 길이를 candidate 배열에 저장
  }
  return Math.min(...candidate); //candidate 배열중에 제일 작은 숫자 출력. 끝!
}

// console.log(solution("aabbaccc"));
// console.log(solution("ababcdcdababcdcd"));
// console.log(solution("abcabcdede"));
// console.log(solution("abcabcabcabcdededededede"));
// console.log(solution("xababcdcdababcdcd"));
// console.log(solution("abrabcabcadqabcabc"));
// console.log(solution("aabbaccc"));
// console.log(solution("ababcdcdababcdcd"));
// console.log(solution("abcabcdede"));
// console.log(solution("abcabcabcabcdededededede"));
// console.log(solution("x"));
// console.log(solution("aab"));
// console.log(solution("abbbc"));
console.log(solution("a".repeat(1000)));
