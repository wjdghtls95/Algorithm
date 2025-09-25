function solution(n) {
    let count = 0;
    
    // n에서 0까지 거꾸로 계산
    while (n > 0) {
        if (n % 2 === 0) {      // 짝수면 순간이동 가능
            n = Math.floor(n / 2);  // 순간이동 (거꾸로는 /2)
        } else {                // 홀수면 점프 필요
            n -= 1;             // 1칸 뒤로 (거꾸로는 -1)
            count += 1;         // 건전지 1 소모
        }
    }
    
    return count;
}