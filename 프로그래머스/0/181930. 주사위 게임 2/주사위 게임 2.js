function solution(a, b, c) {
    const dice = [a, b, c];
    const uniqueCount = new Set(dice).size;

    const sum1 = a + b + c;
    const sum2 = a**2 + b**2 + c**2;
    const sum3 = a**3 + b**3 + c**3;

    if (uniqueCount === 1) return sum1 * sum2 * sum3;
    if (uniqueCount === 2) return sum1 * sum2;
    return sum1;
}
