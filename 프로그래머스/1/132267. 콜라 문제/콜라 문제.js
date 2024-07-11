function solution(a, b, n) {
    // 콜라 받기위해 주는 병수 a
    // a 개가져다 주면 b병을 주는 마트
    // 빈병 n개
    var answer = 0;
    while(n >= a) {
        answer += Math.floor(n/a)*b
        n = Math.floor(n/a)*b + n%a
    }
    
    return answer;
}