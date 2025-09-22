function solution(n) {
    let answer = 0;
    for (let k = 1; k <= n; k++) {
        if (n % k === 0 && k % 2 === 1) { // 홀수 약수
            answer++;
        }
    }
    return answer;
}