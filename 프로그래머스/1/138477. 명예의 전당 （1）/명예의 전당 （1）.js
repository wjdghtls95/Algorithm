function solution(k, score) {
    const honor = []
    const result = []

    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) {
            honor.push(score[i])
        }
        if(score[i] > Math.min(...honor)) {
            honor.pop()
            honor.push(score[i])
            honor.sort((a,b) => b-a)
        }
        // 결괏값에 명예의 전당 중 최하위 점수 입력
        result.push(honor.at(-1))
    }
    return result
}