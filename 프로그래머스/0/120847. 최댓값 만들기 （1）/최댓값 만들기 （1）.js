function solution(numbers) {
    var answer = 0;
    
    const sortNumber = numbers.sort((a, b) => a - b);
    
    
    return sortNumber[sortNumber.length - 1] * sortNumber[sortNumber.length - 2]
}