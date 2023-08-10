function solution(hp) {
    var answer = 0;
    for(let i = 5 ; i >= 1 ; i=i-2){
        answer += Math.floor(hp/i);
        hp = hp%i;
    }
    return answer;
}