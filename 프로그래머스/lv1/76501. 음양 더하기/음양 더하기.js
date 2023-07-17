//1점
//for of 쓰면 좋았을수도?
//피곤해서 그냥 while
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