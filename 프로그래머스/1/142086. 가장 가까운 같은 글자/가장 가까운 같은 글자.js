function solution(s) {
    const last = new Map();   // Map<char, index>
    const ans = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        ans[i] = last.has(ch) ? i - last.get(ch) : -1;
        last.set(ch, i);
    }
    return ans;
}