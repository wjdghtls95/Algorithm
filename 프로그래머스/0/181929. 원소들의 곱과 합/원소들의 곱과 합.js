function solution(num_list) {
    let square = 1;
    let sum = 0

    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        square *= num_list[i];

        console.log(i, sum, square)
    }


    return square < sum**2 ? 1 : 0
}