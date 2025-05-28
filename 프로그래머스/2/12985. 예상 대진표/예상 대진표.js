function solution(n, a, b) {
    let round = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    return round;
}
// function solution(n, a, b) {
//   var cnt = 1; // 1라운드 부터 시작이므로 1로 시작 0으로 하면 x
//   let nextNum = (num) => Math.floor((num + 1) / 2); // 이겼을때 다음으로 가질 번호
//   while (a !== b) { // a 다음 번호가 b 다음번호와 같아지면 끝남
//     if (nextNum(a) === nextNum(b)) {
//       break;
//     }
//     a = nextNum(a);
//     b = nextNum(b);
//     console.log('a, b : ', a, b);
//     cnt++
//   }
//   return cnt;
// }