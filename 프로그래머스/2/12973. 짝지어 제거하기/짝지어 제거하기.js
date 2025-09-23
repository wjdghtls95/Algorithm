function solution(s)
{
    var answer = [];

    for(const ch of s) {
        if(answer.length > 0 && answer[answer.length - 1] === ch) {
            answer.pop()
        } else {
            answer.push(ch)
        }
    }


    return answer.length === 0 ? 1 : 0;
}