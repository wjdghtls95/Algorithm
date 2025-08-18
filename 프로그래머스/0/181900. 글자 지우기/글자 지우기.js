function solution(my_string, indices) {
    const removeSet = new Set(indices);  // 삭제할 인덱스를 Set으로
    const result = [];

    for (let i = 0; i < my_string.length; i++) {
        if (!removeSet.has(i)) {  // 지워야 하는 위치 아니면 추가
            result.push(my_string[i]);
        }
    }

    return result.join('');
}