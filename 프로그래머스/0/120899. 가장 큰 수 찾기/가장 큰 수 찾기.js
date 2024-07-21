function solution(array) {

    const max = Math.max(...array)

    const index =array.indexOf(Math.max(...array))

    return [max, index]
}