function solution(n) {
    var answer = [];
    //삼항연산자를 써서 해보려했는데, continue가 적용이 안됨
    //i%2 ? answer.push(i) : continue;
    
    for(let i = 1 ;  i <= n ; i++){
        if(i%2 == 0){
            continue;
        }
        answer.push(i)
    }
    return answer;
}