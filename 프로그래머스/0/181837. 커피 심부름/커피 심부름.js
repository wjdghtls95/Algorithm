function solution(order) {
    let total = 0;

    for (const drink of order) {
        if (drink.includes("americano") || drink === "anything") {
            total += 4500;
        } else if (drink.includes("cafelatte")) {
            total += 5000;
        }
    }

    return total;
}