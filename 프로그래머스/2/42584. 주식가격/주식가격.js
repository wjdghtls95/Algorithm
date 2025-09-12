function solution(prices) {
    const n = prices.length;
    const answer = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            answer[i]++;
            if (prices[j] < prices[i]) break;
        }
    }
    return answer;
}