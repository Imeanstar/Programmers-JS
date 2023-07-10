function solution(n) {
    var answer = [];
    for(let i = 1 ;  i <= n ; i++){
        if(i%2 == 0){
            continue;
        }
        answer.push(i)
    }
    return answer;
}