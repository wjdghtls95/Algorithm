function solution(my_string, index_list) {
    const strArr = my_string.split('');
    const answer = [];

    for(let i = 0; i < index_list.length; i++ ) {
        answer.push(strArr[index_list[i]])
    }

    return answer.join('');
}