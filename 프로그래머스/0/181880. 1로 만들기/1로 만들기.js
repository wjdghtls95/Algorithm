function solution(num_list) {
    var answer = 0;

        for (const it of num_list) {
            let x = it;
            while (x > 1) {
                // 짝수면 x = x / 2, 홀수면 x = (x - 1) / 2  → 결국 Math.floor(x / 2)와 동일
                x = (x % 2 === 0) ? (x / 2) : ((x - 1) / 2);
                answer += 1; // 한 번 수행할 때마다 카운트
            }
        }

    return answer;
}