//변수 x정의
function solution(n , x=1) {
    var answer = 0;
    
    //반복문이 x가 n보다 작거나 '같을 때' 까지 반복해야 하므로
    //<= 로 정의
    while(x <= n){
        //만약 n이 x로 나누어 떨어진다면(x가 n의 약수라면)
        if(n%x == 0){
            //answer에 x를 더한다(약수를 정답에 더한다)
            answer += x;
        }
        //그리고 x에 1을 더한다
        x++;
    }
    
    return answer;
}