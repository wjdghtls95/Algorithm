function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const words = [];

    function dfs(curr) {
        if (curr.length > 5) return;
        if (curr.length > 0) words.push(curr); // 길이 1~5만

        for (let v of vowels) {
            dfs(curr + v);
        }
    }

    dfs('');

    words.sort();                  // dfs 순서가 이미 사전순이지만, 안전하게
    return words.indexOf(word) + 1;
}

console.log(solution("AAAAE"))
console.log(solution("AAAAE"))
console.log(solution("AAAE"))
console.log(solution("I"))
console.log(solution("EIO"))
