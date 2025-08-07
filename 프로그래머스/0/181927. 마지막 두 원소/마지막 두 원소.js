function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const secondLast = num_list[num_list.length - 2];

    let addIndex = 0;

    if (last > secondLast) {
        addIndex = last - secondLast;
    } else {
        addIndex = last * 2;
    }

    num_list.push(addIndex);

    return num_list;
}