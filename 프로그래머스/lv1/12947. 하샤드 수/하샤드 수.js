//2점
function solution(x) {
    
    let i = String(x);
    let arr = [...i];
    let sum = 0;
    var answer = true;
    for(let j = 0 ; j < arr.length ; j++){
        sum += parseInt(arr[j]);
    }
    Number.isInteger(x/sum) ? answer =  true : answer = false;
    
    
    return answer;
}