function solution(number, limit, power) {
    //let arr = new Array(number).fill(0);
    var answer = 0;
    let arr = [];
    arr[0] = 0;
    for(let i = 1 ; i <= number ; i++){
        arr[i] = 0;
        //console.log(arr);
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