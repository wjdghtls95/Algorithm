function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        // 약수 개수 계산
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++;
                if (j !== i / j) count++;
            }
        }

        // limit 이하면 약수 개수, 초과하면 power
        answer += count <= limit ? count : power;
    }

    return answer;
}