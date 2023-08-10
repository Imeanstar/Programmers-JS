// 1점
// 대부분 sort랑 map활용해서 문제 풀이
function solution(emergency) {
    var answer = [];
    for(let i = 0 ; i < emergency.length ; i++){
        answer[emergency.indexOf(Math.max(...emergency))] = i+1;
        emergency[emergency.indexOf(Math.max(...emergency))] = -1;
    }
    
    return answer;
}