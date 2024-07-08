function solution(t, p) {
    var answer = 0;
    
    const numP = Number(p);
     for(let i = 0; i < t.length - p.length + 1; i++){
        const slicedT = t.slice(i, i + p.length);
        const numT = Number(slicedT);
        
        if(numT <= numP){
            answer += 1;
        }
    }
    
    return answer;
    
}