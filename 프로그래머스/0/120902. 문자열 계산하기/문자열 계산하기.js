function solution(my_string) {
    const tokens = my_string.split(" ")
    let result = BigInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = BigInt(tokens[i + 1]);

        if (operator === "+") {
            result += operand;
        } else {
            result -= operand;
        }
    }
    return result;
}