function solution(s) {
    const words = s.toLowerCase().split(' ');
    const answer = [];

    for (const w of words) {
        const chars = w.split('');
        if (chars[0]) {
            chars[0] = chars[0].toUpperCase();
        }
        answer.push(chars.join(''));
    }
    return answer.join(' ');
}