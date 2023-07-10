function solution(n) {
    var answer = 0;
    
    answer = Math.floor(n/7);
    n%7 ? answer++ : answer+=0 ;
    
    return answer;
}