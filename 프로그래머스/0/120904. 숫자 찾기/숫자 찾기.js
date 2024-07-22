function solution(num, k) {
    return num.toString().split("").map((it) => Number(it)).indexOf(k) + 1 || -1
}