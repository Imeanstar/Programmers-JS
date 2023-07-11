function solution(n) {
    var answer = [];
    let i = 1;
    while(true){
        if(n/i < 10){
            break;
        }
        i*=10;
    }
    //i = 10000
    
    let temp = 0;
    while(i >= 1){
        temp = Math.floor(n / i);
        n -= temp*i;
        i/=10;
        answer.unshift(temp);
    }
    
    
    
    
    return answer;
}