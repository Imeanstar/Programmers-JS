function solution(board, moves) {
    let arr = [];
    let arrNum = 0;
    var answer = 0;
    
    for(let i = 0 ; i < moves.length ; i++){
        for(let j = 0 ; j < board.length ; j++){
            if(board[j][moves[i]-1]){ //0이 아니면
                // console.log([moves[i]-1]);
                // console.log(board);
                arr.push(board[j][moves[i]-1]);
                arrNum++;
                board[j][moves[i]-1] = 0;
                
                break;
            }
        }
        if((arr[arrNum-1] == arr[arrNum-2]) && (arrNum != 0)){
            console.log(arr);
            arr.pop();
            arr.pop();
            console.log(arr);
            arrNum -= 2;
            answer++;
        }
    }
    answer *= 2;
    return answer;
}