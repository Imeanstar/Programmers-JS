function solution(n, lost, reserve) {
    var answer = 0;
    lost = lost.sort((a,b)=>(a-b));
    reserve = reserve.sort((a,b)=>(a-b));
    answer = n - lost.length;
    for(let i = 0 ; i < lost.length ; i++){
        if(reserve.indexOf(lost[i])>-1){
            answer++;
            reserve[reserve.indexOf(lost[i])] = -1;
            lost[i] = -100;
        }
    }
    for(let i = 0 ; i < lost.length ; i++){
        if(reserve.indexOf(lost[i]-1)>-1){
            answer++;
            reserve[reserve.indexOf(lost[i]-1)] = -1;
        }
        else if(reserve.indexOf(lost[i]+1)>-1){
            answer++;
            reserve[reserve.indexOf(lost[i]+1)] = -1;
        }
    }
    return answer;
}