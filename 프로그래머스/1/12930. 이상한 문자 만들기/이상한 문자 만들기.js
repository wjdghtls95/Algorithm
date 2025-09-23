function solution(s) {
    var answer = [];

    const words = s.split(' ')

    let ch;

    for (const word of words) {
        ch = word.split('')
        for (let i = 0; i < ch.length; i++) {
            if(i % 2 === 1) {
                ch[i] = ch[i].toLowerCase()
            } else {
                ch[i] = ch[i].toUpperCase()
            }
        }
        answer.push(ch.join(''))
    }

    return answer.join(' ');
}