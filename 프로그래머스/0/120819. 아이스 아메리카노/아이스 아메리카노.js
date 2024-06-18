function solution(money) {
    const coffee = 5500;
    
    const result1 = Math.floor(money / coffee)
    const result2 = Math.floor(money % coffee)
    return [result1, result2]
}