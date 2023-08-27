//14점
function solution(babbling) {
    var answer = 0;
    let arr = ['aya' , 'ye' , 'woo' , 'ma'];
    //index에 없으면 -1이라서 원래 -1로 해놨는데 -2로 변경함
    //원래 여기였는데 에러때문에 for문 안으로 배치함
    //let temp2 = -2;
    for(let i = 0 ; i < babbling.length ; i++){
        //이거 없어서 좀 오래 에러 해결하느라 걸렸음
        //배열이 ['ayaye', 'ye'] 이렇게 되어있으면 답이 2가 나와야되는데
        //0번에서 ye로 끝나니까 temp2에 ye를 넣어둠
        //그래서 다음 ye가 중복되는걸로 처리되고있었음
        let temp2 = -2;
        //length가 계속 바껴서 그냥 고정
        let temp = babbling[i].length;
        for(let j = 0 ; j < temp ; j++){
            if(babbling[i][0]=='a' || babbling[i][0]=='w'){
                //만약 중복되는 단어라면
                if(arr.indexOf((babbling[i].slice(0,3))) == temp2){
                    temp2 = -2;
                    break;
                }
                //만약 잘라낸 부분(3자리) 가 aya거나 woo 라면
                else if(arr.indexOf((babbling[i].slice(0,3))) != -1){
                    temp2 = arr.indexOf((babbling[i].slice(0,3)));
                    babbling[i] = babbling[i].slice(3,);
                    if(babbling[i] == ''){
                        break;
                    }
                }
            }
            else if(babbling[i][0]=='y' || babbling[i][0] == 'm'){
                if(arr.indexOf((babbling[i].slice(0,2))) == temp2){
                    temp2 = -2;
                    break;
                }
                if(arr.indexOf((babbling[i].slice(0,2))) != -1){
                    temp2 = arr.indexOf((babbling[i].slice(0,2)));
                    babbling[i] = babbling[i].slice(2,);
                    if(babbling[i] == ''){
                        break;
                    }
                }
            }
        }
    }
    for(let q = 0 ; q < babbling.length ; q++){
        if(babbling[q] == ''){
            answer++;
        }
    }
    return answer;
}