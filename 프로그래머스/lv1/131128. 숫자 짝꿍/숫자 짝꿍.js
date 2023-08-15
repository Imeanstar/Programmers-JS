function solution(X, Y) {
    let arr=[];
    var answer = '';
    let Xarr = new Array(10).fill(0);
    let Yarr = new Array(10).fill(0);
    let ansarr = new Array(10).fill(0);
    //X=X.split('').sort((a,b)=>(a-b));
    //Y=Y.split('').sort((a,b)=>(a-b));
    X=X.split('');
    Y=Y.split('');
    xlen = X.length; ylen = Y.length;
    //X를 소팅해놨고, 다른 배열에 각 숫자별 시작하는 칸 입력해둘 예정
    //어짜피 모든 숫자는 0~9 로 한정되어있기 때문에
    //0이 끝나면 1로, 1이 끝나면 2로 바로 이동하면 더 빠르게 될 것 같음
    //그래도 n^2 이긴한디; 좀 개선되지않을까
    // -> 안됨
    for(let i = 0 ; i < X.length ; i++){
        Xarr[X[i]]++
    }for(let i = 0 ; i < Y.length ; i++){
        Yarr[Y[i]]++
    }
    for(let i = 0 ; i < ansarr.length ; i++){
        if(Xarr[i] == Yarr[i]){
            ansarr[i] = Xarr[i];
        }
        else if(Xarr[i] > Yarr[i]){
            ansarr[i] = Yarr[i];
        }
        else{
            ansarr[i] = Xarr[i];
        }
    }
    console.log(ansarr);
    for(let i = 9 ; i >= 0 ; i--){
        while(ansarr[i]!=0){
            arr.push(i);
            ansarr[i]--;
        }
    }

    
    if(arr==0){
        answer = "-1";
        return answer;
    }
    else{
        //arr = arr.sort((a,b)=>(b-a));
        if(arr[0]==0 && arr[1]==0){
            return "0";
        }
        arr=arr.join('');
        //arr=BigInt(arr);
        //arr=String(arr);
        //"00"을 "0"으로 바꿔주기위한 강제형변환
        //근데 이렇게 해주면 int값을 벗어나서 에러가 뜬다
        //그래서 일단 BigInt로 설정
        //근데 이렇게 하니까 시간초과가 뜨네?
        answer = arr;
    }
    return answer;
}