function solution(age) {
    var answer = 'abcdefghij';
    return String(age).split('').map((it) => answer[it]).join('');
}