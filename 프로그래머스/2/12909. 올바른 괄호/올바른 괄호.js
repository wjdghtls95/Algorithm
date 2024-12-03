function solution(s){
    const sArr = s.split('')

  if (sArr.length % 2 === 1) {
    return false
  }

  if (sArr[0] === ')' || sArr[sArr.length - 1] === '(') {
    return false;
  }

  let stackCnt = 0;

  for (let i = 0; i < sArr.length; i++) {
    stackCnt += sArr[i] === '(' ? 1 : -1;

    if (stackCnt < 0) { return false}
  }

  return stackCnt === 0 ? true : false;
}