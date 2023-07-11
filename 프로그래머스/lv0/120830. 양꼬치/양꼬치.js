function solution(n, k) {
    let sum = 0;
    sum = (12000*n)+(2000*k);
    if(n >= 10){
        sum -= (2000*(parseInt(n/10)))
    }
    
    
    
    return sum;
}