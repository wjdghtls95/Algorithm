function solution(my_string) {
    const answer = my_string.split('').map((it) => {
        if(it === it.toUpperCase()) {
            return it.toLowerCase()
        } else {
            return it.toUpperCase()
        }
    }).join('')
    

    return answer;
}