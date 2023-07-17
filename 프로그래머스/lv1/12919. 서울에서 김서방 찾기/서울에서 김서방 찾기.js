function solution(seoul) {
    var answer = '';
    let n = 0;
    
    for(var val of seoul){
        if (val == "Kim"){
            answer = `김서방은 ${n}에 있다`;
        }
        n++;
    }
    
    
    return answer;
}