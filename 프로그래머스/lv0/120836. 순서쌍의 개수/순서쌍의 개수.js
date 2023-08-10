function solution(n) {
    var answer = 1;
    let arr= []
    let i = 2;
    while (n > 1){
        
        if(Number.isInteger(n/i)){
            if(isNaN(arr[i]) == true){
                arr[i] = 0;
            }
            arr[i]++;
            n = n/i;
            i = 2;
        }
        else{
            i++;
        }
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j]){
            answer *= arr[j]+1
        }
    }
    
    return answer;
}