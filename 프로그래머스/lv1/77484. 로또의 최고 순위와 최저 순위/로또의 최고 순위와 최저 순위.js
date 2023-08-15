//몇점이더라 8점이었나 대충 그정도
//로직 자체는 크게 까다롭지 않은데 몇가지 예외처리하는게 살짝 헷갈린경우
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
    // lottos와 win_nums의 값이 모두 공개되어있고, 모두 다른 경우를 고려하지 못하였음
    // [1,2,3,4,5,0],[7,8,9,10,11,12]의 경우에는
    // answer[i]가 7이면 6으로 바꿔주는 작업 진행
    // [1,2,3,4,5,6], [7,8,9,10,11,12]의 경우에는
    // answer[0]가 7이면 6으로 바꿔주는 작업 진행
    // 해당 과정이 짧긴한데 최적화 가능할것같은 느낌이
    return answer;
}