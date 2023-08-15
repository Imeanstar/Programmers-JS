//14점
//로직자체에 큰 어려움은 없었으나, 예외가 꽤 많이 발생해서 어려웠던 문제
//반례는 질문하기를 참고하였음
//가장 중요하다고 생각하는 부분은 lost와 reserve sorting하기
//greedy로 풀게되면 그냥 앞에서부터 때려박는데
//5, [4, 2], [3, 5]
//이렇게 입력되면 3에서 4를 가져가버려서 기대값인 5가 안됨
//그래서 sorting해줘서 제대로 가져가도록 해야함
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