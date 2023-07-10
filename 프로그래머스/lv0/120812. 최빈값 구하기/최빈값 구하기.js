//12점
function solution(array) {
    var answer = 0;
    let longarr = [];
    let j = 0;
    
    //변수 길이 설정 및 초기화
    //array의 원소는 1000까지 나올 수 있다. 
    //따라서 longarr도 1000까지 구성해야한다
    for(let i = 0 ; i < 1000 ; i++){
        longarr[i] = 0;
    }
    
    //각 longarr의 i번째 배열은 입력받은 array에서 i의 갯수를 뜻한다
    //이를 위해 array의 길이만큼 반복하고,
    //longarr의 (array의 j번째 숫자) 번째 숫자에 1씩 더한다
    while(j < array.length){
        longarr[array[j]] += 1;
        j++
    }
    
    //temp = 최빈값 찾는 용도
    //temp2 = 최빈값 겹치면 저장해두는 용도
    //memory_when = 언제 최빈값이었는지 배열 순서 저장해두는 용도
    let temp = -1;
    let temp2 = -1;
    let memory_when = -1;
    
    
    
    for(let k = 0 ; k < 1000 ; k+=1){
        //만약 temp가 array에서 k번째 숫자의 갯수보다 작다면
        //무조건 처음에 걸리도록 temp를 -1으로 설정
        if(temp < longarr[k]){
            //temp에 k번째 숫자의 갯수 입력
            //memory_when에 k번째 입력
            temp = longarr[k]; 
            memory_when = k;
        }
        //혹은 temp에 저장되어있는 값과 array에서 k번째 숫자의 갯수가 같다면
        //(최빈값이 중복된다)
        //중복된다는 것을 알기위해 temp2에 현재 temp의 값(이전 최빈값의 갯수) 입력
        else if(temp == longarr[k]){
            temp2 = temp;
        }
    }
    //만약 temp가 temp2보다 크다면
    //memory_when출력

    //만약 temp와 temp2가 같다면
    //최빈값이 겹치는게 있다는 뜻이므로 -1 출력

    (temp > temp2) ? answer =  memory_when : answer =  -1;
    return answer;
}