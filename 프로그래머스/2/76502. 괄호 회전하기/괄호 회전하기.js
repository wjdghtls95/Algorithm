function solution(s) {
    const n = s.length;
    if (n % 2 === 1) return 0;

    // 해시: 닫는 괄호 → 여는 괄호
    const pair = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ]);

    let answer = 0;

    for (let start = 0; start < n; start++) {
        const stack = [];
        let ok = true;

        for (let k = 0; k < n; k++) {
            const ch = s[(start + k) % n];

            if (pair.has(ch)) {
                // 닫는 괄호
                if (stack.length === 0 || stack.pop() !== pair.get(ch)) {
                    ok = false;
                    break;
                }
            } else {
                // 여는 괄호
                stack.push(ch);
            }
        }

        if (ok && stack.length === 0) answer++;
    }

    return answer;
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))
