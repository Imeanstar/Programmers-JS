function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n).fill(1);
    let idx = 0;
    for(let i = 0 ; i < section.length ; i++){
        arr[section[i]-1] = 0;
    }
    // console.log(arr);
    while(idx != -1){
        idx = arr.indexOf(0);
        for(let i = idx ; i < idx+m ; i++){
            // console.log(idx);
            if(i>=arr.length || idx == -1){
            break;
            }
            arr[i] = 1;
        }
        // console.log(arr)
        answer ++;
    }
    
    answer -= 1 
    // console.log(idx);
    // console.log(arr);
    return answer;
}