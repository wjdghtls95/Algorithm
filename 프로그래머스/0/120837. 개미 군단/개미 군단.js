function solution(hp) {
    var answer = 0;
    
    let a = Math.floor(hp / 5);
    let b = Math.floor((hp - a * 5) / 3)
    let c = hp - a * 5 - b * 3
    return a + b + c;
}