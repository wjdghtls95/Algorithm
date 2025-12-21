function solution(X, Y) {
    const cntX = Array(10).fill(0);
    const cntY = Array(10).fill(0);

    // 1) 빈도 세기
    for (let i = 0; i < X.length; i++) cntX[X.charCodeAt(i) - 48]++;
    for (let i = 0; i < Y.length; i++) cntY[Y.charCodeAt(i) - 48]++;

    // 2) 큰 숫자부터 결과에 "넣기"
    const parts = [];
    for (let d = 9; d >= 0; d--) {
        const k = Math.min(cntX[d], cntY[d]);

        if (k > 0) parts.push(String(d).repeat(k));
    }

    // 3) 예외 처리
    if (parts.length === 0) return "-1";

    const ans = parts.join("");
    if (ans[0] === "0") return "0"; // 전부 0으로만 구성
    return ans;
}

console.log(solution("100", "203045"))