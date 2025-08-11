function solution(my_string, queries) {
    let arr = my_string.split('');

    for (const [s, e] of queries) {
        // s~e 구간을 뒤집기
        const reversed = arr.slice(s, e + 1).reverse();
        arr.splice(s, e - s + 1, ...reversed);
    }

    return arr.join('');
}