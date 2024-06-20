function solution(myString, letter) {
    return myString
      .split('')
      .filter((it) => it !== letter)
      .join('');
}