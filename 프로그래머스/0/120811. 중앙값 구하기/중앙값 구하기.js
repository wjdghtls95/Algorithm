function solution(array) {
    const result = array.sort((a, b) => a - b)
    
    return result[Math.floor(result.length / 2)];
}