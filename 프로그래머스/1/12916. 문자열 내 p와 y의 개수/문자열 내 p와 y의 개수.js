function solution(s){
    var answer = true;

    let pCnt = 0
    let yCnt = 0

    const arr = s.toUpperCase().split('');

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 'P') {
            pCnt++
        }
        if(arr[i] === 'Y'){
            yCnt++
        }
    }

    return pCnt === yCnt ? true : false;
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))
