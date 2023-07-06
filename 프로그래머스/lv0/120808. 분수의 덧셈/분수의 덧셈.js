function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let i = 2;
    let gcd = 0;
    
    //분자끼리 더하기 위해 분모 맞춰주기
    numer1 *= denom2;
    numer2 *= denom1;
    denom1 *= denom2;
    
    //분자는 서로 더해주고 분모는 하나로 통합
    // answer.push(numer1 + numer2);
    // answer.push(denom1);
    answer[0] = numer1 + numer2;
    answer[1] = denom1;

    //분자까지 갈 때 까지 반복
    while(i <= answer[0]){
        //만약 i값으로 분자도 나눠떨어지고, 분모도 나눠떨어지면 
        //(둘 다 0이라서 OR문에서 false출력)
        if((answer[0]%i || answer[1]%i) == false ){
            //gcd에 i값 넣기
            gcd = i;
        }
        //i = i+1
        i++
    }
    //만약 gcd에 들어간 값 없으면 처음값이 기약분수
    if(gcd == 0){
        return answer;
    }
    //gcd에 들어간 값 있으면 gcd로 나눠서 기약분수 만들기
    //왜냐하면 gcd가 최대공약수
    else{
        answer[0] /= gcd;
        answer[1] /= gcd;
        return answer;
    }
}