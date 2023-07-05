function solution(n)
{
    //정답 제출용 변수
    var answer = 0;
    //숫자 길이 구하기
    const length = String(n).length;
    //길이만큼 나눠주기 위한 변수
    let hun = 10 ** length / 10;
    
    while(hun != 0){
        //입력받은 수 / hun (ex. 123 / 100 = 1.23)
        answer += n / hun;
        //answer을 정수화 시킴(1.23 -> 1)
        answer = parseInt(answer);
        //n을 hun으로 나눠줌 (ex. 123 -> 23)
        n = n % hun;
        //hun을 한 자리 줄여줌(ex. 100 -> 10)
        hun = hun / 10;
        //반복
    }
    return answer;
}