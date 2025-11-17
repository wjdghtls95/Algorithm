function solution(n) {

    const ternary = parseInt([...n.toString(3)].reverse().join(''), 3)


    return ternary;
}