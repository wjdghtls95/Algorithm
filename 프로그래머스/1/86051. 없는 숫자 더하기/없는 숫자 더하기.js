function solution(numbers) {
    const total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, cul) => acc + cul, 0)
    const cnts = numbers.reduce((acc, cul) => acc + cul, 0)

    return total - cnts;
}