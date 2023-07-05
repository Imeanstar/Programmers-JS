//변수 x 지정
function solution(a, b , x=0) {
    var answer = 0;
    //b를 무조건 a보다 크도록 세팅
    if(a > b){
        const temp = a;
        a = b;
        b = temp;
    }
    //두 값이 같을 경우 a출력
    else if(a == b){
        return a;
    }
    //x에 b지정
    x = b;
    //x가 a보다 작아질 때 까지 반복
    while(x >= a){
        //answer에 x더하기
        answer += x;
        x--;
    }
    
    
    
    return answer;
}