//2점
//for of와 sort사용
function solution(arr, divisor) {
    var answer = [];
    
    for(let x of arr){
        if(x%divisor == 0){
            answer.push(x);
        }
    }
    answer.sort(function(a,b){
        return a - b;
    })
    if(answer[0] == undefined){
        answer[0] = -1;
    }
    return answer;
}