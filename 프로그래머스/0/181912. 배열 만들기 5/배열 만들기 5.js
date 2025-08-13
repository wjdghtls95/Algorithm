function solution(intStrs, k, s, l) {
    const result = [];

    for (const str of intStrs) {
        const num = Number(str.slice(s, s + l));
        if (num > k) {
            result.push(num);
        }
    }

    return result;
}