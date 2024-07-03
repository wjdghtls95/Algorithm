function solution(sides) {
    var answer = 0;
    
    const sortNumber = sides.sort((a ,b) => a - b);
    
    return sortNumber[sortNumber.length - 1] >= sortNumber[0] + sortNumber[1] ? 2 : 1
}