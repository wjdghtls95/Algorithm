function solution(arr, k) {
    var answer = [];


    return k % 2 === 1 ? arr.map(it => it * k) : arr.map(it => it + k);
}
