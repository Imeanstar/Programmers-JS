function solution(arr, x=0) {
    var answer = 0;
    
    while(arr[x] != null){
        answer += arr[x];
        x++;
    }
    answer = answer / (x)
    
    return answer;
}