//13점
//시간복잡도 해결이 제일 어려운 문제
//처음에는 X랑 Y sorting해서 숫자 비교해서 result에 push하는 방식으로 했는데
//시간초과 에러 발생
//그래서 아쉽지만 힌트 보고 방식 변경
//X숫자 Y숫자 배열 따로 만들어서 각 숫자 갯수 구하고 그걸로 새로운 배열 구현
//새로운 배열은 result에 들어가야 할 숫자 갯수로 구현

//그렇게 해서 기존에 n^2의 시간복잡도를 가진 코드에서
//4n의 시간복잡도를 가진 코드로 변환되었음
//그런데 아직도 시간초과가 발생하여서 어디가 문제인가 보았더니
//"000"을 "0"으로 변환하는 강제형변환과정에서 문제가 발생했음

//그래서 어짜피 가장 큰 수부터 result에 출력하는 거기때문에
//result의 0번과 1번이 둘 다 0이면 "00"이상의 값이라 그냥 "0"으로 바꿔줘도 됨
//해당 코드 넣으니 최대 700ms의 시간이 걸리지만 어쨌든 해결됨
function solution(X, Y) {
    let arr=[];
    var answer = '';
    let Xarr = new Array(10).fill(0);
    let Yarr = new Array(10).fill(0);
    let ansarr = new Array(10).fill(0);
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