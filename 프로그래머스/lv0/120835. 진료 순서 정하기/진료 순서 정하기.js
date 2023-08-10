function solution(emergency) {
    var answer = [];
    for(let i = 0 ; i < emergency.length ; i++){
        answer[emergency.indexOf(Math.max(...emergency))] = i+1;
        emergency[emergency.indexOf(Math.max(...emergency))] = -1;
    }
    
    return answer;
}