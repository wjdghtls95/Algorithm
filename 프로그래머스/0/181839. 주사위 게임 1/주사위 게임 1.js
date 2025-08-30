function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) {
        return a ** 2 + b ** 2;       // 둘 다 홀수
    } else if (a % 2 === 0 && b % 2 === 0) {
        return Math.abs(a - b);       // 둘 다 짝수
    } else {
        return 2 * (a + b);           // 섞임
    }
}