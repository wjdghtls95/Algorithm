// 단계별 접근법
function solution(n) {
    // 1. Base Case 찾기
    if (n <= 2) return n;

    // 2. 점화식 세우기
    // dp[i] = dp[i-1] + dp[i-2]

    // 3. DP 배열 초기화
    const dp = new Array(n + 1);

    // 4. Base Case 설정
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    // 5. Bottom-up 계산
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }

    // 6. 결과 반환
    return dp[n];
}