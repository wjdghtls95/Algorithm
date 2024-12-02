function solution(cards1, cards2, goals) {
    for(const goal of goals) {

        if(cards1[0] == goal) {
            cards1.shift();
        } else if(cards2[0] == goal) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}
