function solution(n) {
    
    let i = Math.sqrt(n);
    let j = Number.isInteger(i);
    if(j == true){
        return (i+1)**2;
    }
    else{
        return -1;
    }
}