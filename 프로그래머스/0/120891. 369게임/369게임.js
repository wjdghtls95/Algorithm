function solution(order) {
    let answer = 0
    const orders = order.toString().split('').map(Number);

      for (let i = 0; i < orders.length; i++) {
        if (orders[i] == 3 || orders[i] == 6 || orders[i] == 9) {
          answer++;
        }
      }

      console.log(answer);

      return answer;
}