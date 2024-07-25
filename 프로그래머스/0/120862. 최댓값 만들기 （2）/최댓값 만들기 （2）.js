function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    const first = numbers[0]*numbers[1];
    const last = numbers[numbers.length - 2] * numbers[numbers.length - 1]
    return first > last ? first : last
}