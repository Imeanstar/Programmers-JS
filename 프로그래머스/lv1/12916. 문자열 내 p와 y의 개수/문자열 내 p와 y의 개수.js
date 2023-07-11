//4점
function solution(s){
    var answer = true;
    let arr = [];
    arr = [...s];
    let tmp1 = 0;
    let tmp2 = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == 'p' || arr[i] == 'P'){
            tmp1++;
        }
        else if(arr[i] == 'y' || arr[i] == 'Y'){
            tmp2++;
        }
    }
    if(tmp1 == tmp2){
        return true;
    }
    else{
        return false;
    }

}