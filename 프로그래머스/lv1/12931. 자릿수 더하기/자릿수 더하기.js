function solution(n)
{
    let k = n;
    var answer = 0;
    let formul = 0 ;
    const length = String(n).length;
    let hun = 10 ** length / 10;
    
    while(hun != 0){
        answer += k / hun;
        answer = parseInt(answer);
        k = k % hun;
        // k = parseInt(k);
        hun = hun / 10;
    }
    
    // console.log(hun);
    
    return answer;
}