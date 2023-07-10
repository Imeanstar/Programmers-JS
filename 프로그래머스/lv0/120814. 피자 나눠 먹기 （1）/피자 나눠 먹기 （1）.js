//3점
function solution(n) {
    var answer = 0;
    
    //7로 나눠서 몫을 answer에 대입
    //나머지가 있으면(true면) 1을더해주고
    //나머지가 없으면(0 = false면) 아무것도 안해줌
    answer = Math.floor(n/7);
    n%7 ? answer++ : answer+=0 ;
    
    return answer;
}