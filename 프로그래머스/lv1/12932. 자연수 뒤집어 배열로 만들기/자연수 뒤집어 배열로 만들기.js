//6점
function solution(n) {
    var answer = [];
    let i = 1;
    let temp = 0;
    
    
    //n의 자릿수 알아내고 그 만큼 i키우기
    while(true){
        if(n/i < 10){
            break;
        }
        i*=10;
    }
    
    //i가 1일때까지 반복
    while(i >= 1){
        //temp에 가장 앞자리 수를 넣어줌
        temp = Math.floor(n / i);
        //n의 가장 앞자리 수를 빼줌
        n -= temp*i;
        //i를 10으로 나눠줌
        i/=10;
        //answer 배열의 가장 앞에 해당 숫자를 삽입
        answer.unshift(temp);
    }

    return answer;
}