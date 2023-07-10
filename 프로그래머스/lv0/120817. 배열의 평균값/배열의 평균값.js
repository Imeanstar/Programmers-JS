function solution(numbers) {
    var answer = 0;
    
    numbers.forEach(function(item, index){
        answer += item;
    })
    answer /= numbers.length
    return answer;
}