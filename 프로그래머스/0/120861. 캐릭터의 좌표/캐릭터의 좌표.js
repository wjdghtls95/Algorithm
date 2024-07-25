function solution(keyinput, board) {
      let x = 0;
  let y = 0;
  //이동가능한 최대값을 구해줌
  let boundary = [Math.floor(board[0]/2),Math.floor(board[1]/2)]
  
  for(key of keyinput){
    
    if(key==='left'){
      x--;
    }
    if(key==='right'){
      x++;
    }
    if(key==='up'){
      y++;
    }
    if(key==='down'){
      y--;
    }
    
    //이동 값이 최댓값을 넘어가면 최댓값으로 치환
    if(Math.abs(x)>boundary[0]){
      x=x>0? boundary[0] : boundary[0]*-1
    }
    if(Math.abs(y)>boundary[1]){
      y=y>0? boundary[1] : boundary[1]*-1
    }
      
  }
    return [x,y];
}