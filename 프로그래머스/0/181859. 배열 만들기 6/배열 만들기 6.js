function solution(arr) {
    const stk = [];

    for (const x of arr) {
        if (stk.length && stk[stk.length - 1] === x) {
            stk.pop();
        } else {
            stk.push(x);
        }
    }

    return stk.length ? stk : [-1];
}