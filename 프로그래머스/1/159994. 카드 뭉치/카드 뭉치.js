function solution(cards1, cards2, goal) {
    var answer = 0;

    for (let i = 0; i < goal.length; i++) {
        const word = goal[i]

        if (cards1[0] === word) {
            cards1.shift()
            answer ++
        } else if (cards2[0] === word) {
            cards2.shift()
            answer ++
        } else {
            return "No"
        }
    }

    return answer === goal.length ? "Yes" : "No";
}
