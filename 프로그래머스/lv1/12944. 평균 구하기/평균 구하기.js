//변수 x정의
function solution(arr, x=0) {
    var answer = 0;
    
    //배열이 끝날 때 보이지 않는 null칸이 하나 생기는 것으로 알고있음
    //배열 끝날 때까지 반복문 구성하기 위해 null만나면 반복문 멈추도록 구성
    while(arr[x] != null){
        //answer에 배열 값 더하기
        answer += arr[x];
        //배열 순서 다음칸으로 옮기기
        x++;
    }
    //평균 구하기
    //기존에는 반복문에서 마지막에 x에 1을 더해줘서 x를 1 빼줘야 한다고 생각했으나
    //배열 자체가 0부터 시작하기 때문에 1을 빼주지 않아도 괜찮음
    answer = answer / (x)
    
    return answer;
}