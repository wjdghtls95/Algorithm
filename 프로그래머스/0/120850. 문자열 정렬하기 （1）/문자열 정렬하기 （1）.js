function solution(my_string) {
    return my_string.match(/[0-9]/g).map(Number).sort();
}