function solution(name, yearning, photo) {
    var answer = [] ;

    let obj = new Map()

    for (let i = 0; i < name.length; i++) {
        obj.set(name[i], yearning[i])
    }

    for (const people of photo) {
        let score = 0;

        for(const person of people) {
            score += obj.get(person) || 0;
        }

        answer.push(score);
    }


    return answer;
}