function solution(n) {
    let i = String(n);
    let arr = [];
    var answer = 0;
    arr = [...i];
    arr.sort(function(a,b){
        return a-b;
    });
    for(let j = 0 ; j < arr.length ; j++){
        answer += arr[j] * (10**j);
    }
    
    return answer;
}