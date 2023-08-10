//2점
//나는 그냥 해당 숫자의 배열칸에 넣었는데 push를 한 사람이 있네
//와 그냥 약수의 갯수 구하면 되는거니까 가면서 push돌려서 몇개인지만 구하면 되네
function solution(n) {
    var answer = 1;
    let arr= []
    let i = 2;
    while (n > 1){
        if(Number.isInteger(n/i)){
            //만약 n/i가 정수라면
            if(isNaN(arr[i]) == true){
                //만약 arr[i]가 NaN or null 이라면
                arr[i] = 0;
                //1 더해줘야 하니까 0 으로 만들어준다
            }
            arr[i]++;
            n = n/i;
            i = 2;
            //1 더해주고, n을 i로 나눠서 다음 수로 바꾸고 i를 다시 2로 초기화
        }
        else{
            i++;
            //아니면 현재의 i는 약수가 아니므로 i에 1 더해주기
        }
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        //arr배열 완성된 상태
        if(arr[j]){
            answer *= arr[j]+1
            //약수의 갯수는 지수+1 의 곱
        }
    }
    
    return answer;
}