function solution(my_string) {

    return my_string
          .replace(/[^0-9]/g, '')
          .split('')
          .reduce((acc, num) => acc + Number(num), 0)
}