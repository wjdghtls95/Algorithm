function solution(num_list, n) {
    const newArr = num_list.splice(n, num_list.length);
    
    return [...newArr, ...num_list];
}