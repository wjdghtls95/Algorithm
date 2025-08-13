function solution(my_string, n) {
        return my_string.split('').reverse().slice(0, n).reverse().join('');

}