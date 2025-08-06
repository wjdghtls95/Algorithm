function solution(num_list) {
    const oddList = [];
    const evenList = [];

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenList.push(num_list[i]);
        } else {
            oddList.push(num_list[i]);
        }
    }

    const even = evenList.join('')
    const odd = oddList.join('')
    
    return Number(even) + Number(odd)
}

console.log(solution([3, 4, 5, 2, 1]));