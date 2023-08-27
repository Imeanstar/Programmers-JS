//6점(생각보다 짜다)
function solution(s) {
    var answer = 0;
    let temp;
    let i = 0;
    while(s.length > i){
        //여기서 let tmp1, tmp2 = 0 으로 했더니
        //tmp1이 NaN 이 되는 이슈 있었음
        let tmp1 = 0, tmp2 = 0;
        temp = s[0];
        tmp1++;
        while(true){
            i++;
            if(s[i] == temp){
                tmp1++;
                if(tmp1 == tmp2){
                    i++;
                    answer++;
                    //이건 있으면 에러날거같은데 있어도 괜찮고 없어도 괜찮네;
                    //s = s.slice(i,);
                    break;
                }
            }
            else{
                tmp2++;
                if(tmp1 == tmp2){
                    i++;
                    answer++;
                    s = s.slice(i,);
                    //i를 초기화해주는 이유
                    //문자의 수가 같아져서 처음부터 비교해줘야 함
                    //그래서 s문자열을 slice해서 변경해주고
                    //i도 0으로 시작
                    i = 0;
                    break;
                }
            }
        }
    }
    
    
    
    return answer;
}