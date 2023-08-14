//13점
//문제 자체는 어려운 편은 아닌거같은데
//시간복잡도 최적화가 좀 까다로웠음

//숫자가 많아서 약수를 1부터 끝까지 다 찾아보면 시간이 오버됨
//그래서 제곱근 이용해서 약수 구하는 방식 채용

//처음에는 let arr=new Array(number).fill(0); 으로 arr를 설정해주고 시작했는데
//해당 방식으로 하면 일단 number만큼의 배열 만들고 시작하는거라
//미묘하게 시간복잡도가 조금 더 걸리는듯
//그래서 그냥 정의만 해주고 시작했음
function solution(number, limit, power) {
    //let arr = new Array(number).fill(0);
    var answer = 0;
    let arr = [];
    arr[0] = 0;
    for(let i = 1 ; i <= number ; i++){
        arr[i] = 0;
        for(let j = 1 ; j < Math.sqrt(i); j++){
            if(i%j==0){
                arr[i-1]+=2;
            }
        }
        if(Number.isInteger(Math.sqrt(i))){
            arr[i-1]++;
        }
    }
    let limitArr = 0;
    while(true){
        //limitArr = arr.find(item=>item>limit);
        //let idx = arr.indexOf(limitArr);
        let idx = arr.indexOf(arr.find(item=>item>limit));
        if(idx == -1){
            break;
        }
        arr[idx] = power; 
    }
    for(let i = 0 ; i < arr.length ; i++){
        answer += arr[i];
    }
    return answer;
}