function solution(keymap, targets) {
    var answer = []
    const minPress = new Map()

    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            let ch = key[i]
            let pressCnt = i + 1

            if(!minPress.has(ch) || pressCnt < minPress.get(ch)) { // minPress 에 ch 가 없거나 ch 가 기존 press cnt 보다 작을때
                minPress.set(ch, pressCnt); 
            }
        }
    }

    answer = targets.map(target => {
        let cnt = 0

        for(const ch of target) {
            if(!minPress.has(ch)) return -1 // 해시 맵에 ch 가 없으면 -1 리턴

            cnt += minPress.get(ch) // cnt 에 기존 있는 ch 있으면 +
        }

        return cnt
    })

    return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]))
console.log(solution(["AA"], ["B"]))
console.log(solution(["AGZ", "BSSS"], ["ASA","BGZ"]))