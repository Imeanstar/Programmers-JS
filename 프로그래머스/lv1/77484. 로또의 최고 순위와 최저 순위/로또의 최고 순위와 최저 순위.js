function solution(lottos, win_nums) {
    var answer = [];
    lottos = lottos.sort((a,b)=>a-b);
    win_nums = win_nums.sort((a,b)=>a-b);
    console.log(lottos);
    console.log(win_nums);
    let count = 0;
    for(let i = 0 ; i < 6 ; i++){
        if(lottos.indexOf(win_nums[i])>=0){
            count++;
        }
    }
    let Zero = lottos.indexOf(lottos.find((element)=>element>0))
    //notZero= 0의 갯수
    if(Zero==-1){
        Zero = 6;
    }
    console.log('count : ' + count);
    console.log('Zero : ' + Zero);
    
    answer[1] = 7 - count
    
    answer[0] = answer[1]-Zero;
    if(answer[1] == 7){
        answer[1] = 6;
    }
    if(answer[0] == 7){
        answer[0] = 6;
    }
    //if(count==0 && Zero==1){
    //    answer = [6,6];
    //}
    return answer;
}