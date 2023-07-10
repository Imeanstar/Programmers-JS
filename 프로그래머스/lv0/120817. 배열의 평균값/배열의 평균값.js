//1점
function solution(numbers) {
    var answer = 0;
    
    //forEach로 총합 구하기
    numbers.forEach(function(item, index){
        answer += item;
    })
    answer /= numbers.length
    return answer;
}