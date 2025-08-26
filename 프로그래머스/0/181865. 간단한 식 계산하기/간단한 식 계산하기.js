function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const x = Number(a);
    const y = Number(b);

    switch (op) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        default: return 0;
    }
}