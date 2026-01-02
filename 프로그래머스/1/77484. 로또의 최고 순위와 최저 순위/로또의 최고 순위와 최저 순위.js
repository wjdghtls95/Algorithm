function solution(lottos, win_nums) {
    const winSet = new Set(win_nums);

    let zero = 0;
    let match = 0;

    for (const x of lottos) {
        if (x === 0) zero++;
        else if (winSet.has(x)) match++;
    }

    const rank = (cnt) => (cnt >= 2 ? 7 - cnt : 6);

    const best = rank(match + zero);
    const worst = rank(match);

    return [best, worst];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))