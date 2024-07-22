function solution(n, numlist) {
    var answer = [];
    
 numlist.map((it) => {if(it % n == 0) { answer.push(it)}})
    return answer
}