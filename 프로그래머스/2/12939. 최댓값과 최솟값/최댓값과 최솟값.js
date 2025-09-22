function solution(s) {
    var answer = '';

    const strArr = s.split(' ')

    return [Math.min(...strArr), Math.max(...strArr)].join(' ');
}

console.log(solution('1 2 3 4'))
console.log(solution("-1 -2 -3 -4"))