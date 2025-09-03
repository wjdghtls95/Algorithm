function solution(s) {
    const stack = [];
    for (const ch of s) {
        if (ch === '(') {
            stack.push(ch);
        } else { // ch === ')'
            if (stack.length === 0) return false; // 스택이 비어있는데 닫는 괄호? → 잘못된 경우
            stack.pop(); // 정상적으로 매칭되는 '(' 하나 제거
        }
    }
    return stack.length === 0;
}