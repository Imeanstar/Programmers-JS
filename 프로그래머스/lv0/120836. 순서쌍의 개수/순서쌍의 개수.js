//2점
//나는 그냥 해당 숫자의 배열칸에 넣었는데 push를 한 사람이 있네
//와 그냥 약수의 갯수 구하면 되는거니까 가면서 push돌려서 몇개인지만 구하면 되네
function solution(n) {
    var answer = 1;
    let arr= []
    let i = 2;
    while (n > 1){
        if(Number.isInteger(n/i)){
            if(isNaN(arr[i]) == true)arr[i] = 0;
            arr[i]++;
            n = n/i;
            i = 2;
        }
        else i++;
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j]){
            answer *= arr[j]+1
        }
    }
    
    return answer;
}
