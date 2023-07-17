function solution(price) {
    var answer = 0;
    
    switch(true){
        case (price >= 100_000 && price < 300_000):
            answer = price * 0.95;
            answer = Math.floor(answer);
            break;
        
        case (price >= 300_000 && price < 500_000):
            answer = price * 0.90;
            answer = Math.floor(answer);    
            break;
        
        case (price >= 500_000):
            answer = price * 0.80;
            answer = Math.floor(answer);
            break;
        default:
            answer = price
        
    }
    return answer;
}