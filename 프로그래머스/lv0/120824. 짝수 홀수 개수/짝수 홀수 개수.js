//1점
//for of문 사용
function solution(num_list) {
    var answer = [0,0];
    for(val of num_list){
        val%2 == 0 ? answer[0]++ : answer[1]++
    }
    
    
    return answer;
}