function solution(num_list) {
    var answer = 0;
    let mul = 1

    if(num_list.length > 10) {
        for(const num of num_list) {
            answer+=num
        }

        return answer
    } else if (num_list.length <= 10) {
        for(const num of num_list) {
            mul*=num
        }

        return mul
    }
}