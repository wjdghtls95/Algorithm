function solution(num_list) {
    let answer = [];
    const sortNums = num_list.sort((a, b) => a - b)

    for(let i = 0; i < sortNums.length; i++) {
        if (i > 4) {
            answer.push(sortNums[i]);
        }
    }

    return answer
}