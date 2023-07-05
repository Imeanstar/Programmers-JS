function solution(n) {
    var answer = 0;
    
    for(let i=2 ; i < n ; i++){
        let m = 0;
        m = n % i;
        if(m == 1){
            answer = i;
            break;
        }
        
    }
    
    return answer;
}