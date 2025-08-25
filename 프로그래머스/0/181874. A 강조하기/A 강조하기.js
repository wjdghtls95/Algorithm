function solution(myString) {
    return [...myString]
        .map(ch => ch.toLowerCase() === 'a' ? ch.toUpperCase() : ch.toLowerCase())
        .join('');
}