function solution(my_string) {
    const answer = ["a", "e", "i", "o", "u"];
    return [...my_string].filter((it) => !answer.includes(it)).join("");
}