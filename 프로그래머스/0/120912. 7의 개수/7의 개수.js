function solution(array) {
    var answer = 0;
    const str = array.join('').split('')
    
    str.forEach((it) => {if(Number(it)=== 7) {answer++}})
    
    
    return answer;
}