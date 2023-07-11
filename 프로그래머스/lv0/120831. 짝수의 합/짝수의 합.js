function solution(n) {
    let i = 2;
    let sum = 0;
    while(i <= n){
        sum += i;
        i+=2;
    }
    
    return sum;
}