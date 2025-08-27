function solution(myStr) {
    const answer = myStr.split(/[abc]/).filter(it => it !== '')
    return answer.length > 0 ? answer : ['EMPTY'] ;
}