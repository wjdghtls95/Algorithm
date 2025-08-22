function solution(arr) {
    return arr.map((it) => {
        if (it >= 50 && it % 2 === 0) {
            // 50 이상이면서 짝수 → 절반
            return it / 2;
        } else if (it < 50 && it % 2 === 1) {
            // 50 미만이면서 홀수 → 두 배
            return it * 2;
        } else {
            // 조건 안 맞으면 그대로
            return it;
        }
    });
}