//3점
function solution(n) {
    let i = String(n);
    let arr = [];
    var answer = 0;
    arr = [...i];
    
    //sort method사용 (오름차순 정리)
    arr.sort(function(a,b){
        return a-b;
    });
    
    //내림차순으로 숫자가 되도록 더해 지수 사용해 더해준다
    for(let j = 0 ; j < arr.length ; j++){
        answer += arr[j] * (10**j);
    }
    
    return answer;
}