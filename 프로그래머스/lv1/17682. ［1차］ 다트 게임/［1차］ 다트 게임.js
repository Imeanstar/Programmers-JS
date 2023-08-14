function solution(dartResult) {
    var answer = 0;
    let arrNum = -1;//1or2or3 번째 다트
    let arr = [];
    for(let i = 0 ; i < dartResult.length ; i++){
        //let temp = dartResult[i];
        //temp = parseInt(temp);
        //console.log('배열 = ' + dartResult[i]);
        if(isNaN(dartResult[i]) == false){
            if(dartResult[i] == 0 && dartResult[i-1]==1){
                arr[arrNum] = 10;
            }
            else{
                arrNum++;
                arr.push(dartResult[i]);
            }
            
            //console.log(arr);
            //console.log('배열 번호 = ' + arrNum);
            //console.log(dartResult[arrNum]);
        }
        if(isNaN(dartResult[i]) == true){
            let tmp = dartResult[i];
            if(tmp == 'S'){
                arr[arrNum] = arr[arrNum];
            }
            else if(tmp == 'D'){
                arr[arrNum] = arr[arrNum]*arr[arrNum];
            }
            else if(tmp == 'T'){
                arr[arrNum] = arr[arrNum]*arr[arrNum]*arr[arrNum];
            }
            else if(tmp =='*'){
                if(arrNum == 0){
                    arr[arrNum] = arr[arrNum]*2;
                }
                else{
                    arr[arrNum] = arr[arrNum]*2;
                    arr[arrNum-1] = arr[arrNum-1]*2;
                }
            }
            else if(tmp =='#'){
                arr[arrNum] = arr[arrNum]*-1;
            }
        }
        //arr[arrNum].push(dartResult[i]);
        //arr[arrNum].push(dartResult[i]);
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        arr[j] = +arr[j];
        answer += arr[j];
    }
    console.log(arr);
    return answer;
}