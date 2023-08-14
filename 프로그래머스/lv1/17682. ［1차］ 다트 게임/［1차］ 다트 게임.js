//5점
//아니 이거 왜 5점임?
//코드 구성이 좀 어렵긴한데 꼬인부분은 없어서 그런가;
//if문 말고 switch문으로 리팩토링해도.. 괜찮을지도 모르겠네
function solution(dartResult) {
    var answer = 0;
    let arrNum = -1;//1or2or3 번째 다트
    let arr = [];
    for(let i = 0 ; i < dartResult.length ; i++){
        if(isNaN(dartResult[i]) == false){
            if(dartResult[i] == 0 && dartResult[i-1]==1){
                //만약 10 이면 1&0으로 인식해서 10으로 인식하도록
                arr[arrNum] = 10;
            }
            else{
                arrNum++;
                arr.push(dartResult[i]);
            }
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
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        arr[j] = +arr[j];
        answer += arr[j];
    }
    console.log(arr);
    return answer;
}