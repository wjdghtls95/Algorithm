function solution(cipher, code) {
    var answer = [];
    const cipherArr = cipher.split('')
    
    for(let i = 0; i < cipherArr.length; i++) {
        if ((i+1) % code === 0) {
            answer.push(cipher[i])
        }
    }
    
    return answer.join('');
}