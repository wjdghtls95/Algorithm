function solution(n, arr1, arr2) {
    const answer = [];
  const A = arr1.map((num) => num.toString(2).padStart(n, 0));
  const B = arr2.map((num) => num.toString(2).padStart(n, 0));
  const sumArr = [];
    
  for (let i = 0; i < n; i++) {
    sumArr.push(String(Number(A[i]) + Number(B[i])).padStart(n, 0));
  }
    
  for (let num of sumArr) {
    answer.push(
      num
        .split("")
        .map((it) => (it === "0" ? (it = " ") : (it = "#")))
        .join("")
    );
  }

  return answer;
}