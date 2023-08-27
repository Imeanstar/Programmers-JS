function solution(babbling) {
    //babbling = ["mawoowoo"]
    var answer = 0;
    let arr = ['aya' , 'ye' , 'woo' , 'ma'];
    //index에 없으면 -1이라서 원래 -1로 해놨는데 -2로 변경함
    let temp2 = -2;
    //console.log(babbling);
    for(let i = 0 ; i < babbling.length ; i++){
        let temp2 = -2;
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
                    console.log(temp2);
                    babbling[i] = babbling[i].slice(3,);
                    if(babbling[i] == ''){
                        break;
                    }
                }
            }
            else if(babbling[i][0]=='y' || babbling[i][0] == 'm'){
                //console.log((babbling[i].slice(0,2)))
                if(arr.indexOf((babbling[i].slice(0,2))) == temp2){
                    console.log('con');
                    temp2 = -2;
                    break;
                }
                if(arr.indexOf((babbling[i].slice(0,2))) != -1){
                    temp2 = arr.indexOf((babbling[i].slice(0,2)));
                    console.log(temp2);
                    console.log(babbling[i].slice(0,2));
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
    //console.log(answer);
    return answer;
}