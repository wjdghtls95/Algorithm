function solution(n) {
    const mod = 1234567;

    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const next = (a + b) % mod;
        a = b;
        b = next;
    }
    return b;
}