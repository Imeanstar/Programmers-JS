//1점
//발상의 전환?
function solution(numbers) {
    var answer = -1;
    answer = 45;
    for(let i of numbers){
        answer -= i;
    }
    return answer;
}