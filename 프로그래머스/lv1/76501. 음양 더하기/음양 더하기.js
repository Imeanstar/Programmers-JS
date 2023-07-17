function solution(absolutes, signs) {
    var answer = 123456789;
    answer = 0;
    let len = 0;
    while(len < absolutes.length){
        if(signs[len] == true){
            answer += absolutes[len];
        }
        else{
            answer -= absolutes[len];
        }
        len++
    }
    
    
    return answer;
}