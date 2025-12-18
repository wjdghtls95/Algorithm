function solution(food) {
    var answer = '';

    for (let i = 1; i < food.length; i++) {
       answer += String(i).repeat(Math.floor(food[i] / 2))
    }

    const right = answer.split("").reverse().join('')
    
    return answer + '0' + right;
}

console.log(solution([1, 3, 4, 6], "1223330333221"))
console.log(solution([1, 7, 1, 2], "111303111"))