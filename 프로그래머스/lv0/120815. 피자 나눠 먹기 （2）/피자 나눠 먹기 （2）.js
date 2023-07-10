//5점
function solution(n) {
    
    let i = 1;
    //n명으로 나누어 떨어질 때 까지 6*i 조각 에 i계속 1씩 더해주기
    while((6*i)%n != 0){
        i++;
    }
    
    return i;
}