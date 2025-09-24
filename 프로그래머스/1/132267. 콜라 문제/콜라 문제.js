/***
 * a = 마트에 가져다줄 빈 병 개수
 * b = 마트에서 주는 병 개수 <- a 개를 줘야 b 병을 줌
 * n = 처음에 가지고 있는 병 개수
 * return = 주고 받고 하면서 총 받을 수 있는 병의 개수
 */

function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        let exchanged = Math.floor(n / a) * b;  // 새로 받은 콜라
        answer += exchanged;                     // 마신 콜라 누적
        n = (n % a) + exchanged;                 // 남은 병(교환 못 한 병 + 새로 마신 콜라)
    }
    return answer;
}

console.log(solution(2, 1, 20))
console.log(solution(3, 1, 20))