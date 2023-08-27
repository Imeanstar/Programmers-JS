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
            //break;
            if(s[i] == temp){
                tmp1++;
                if(tmp1 == tmp2){
                    i++;
                    answer++;
                    s = s.slice(i,);
                    //console.log('fi s : ',s);
                    //console.log('fi i : ', i);
                    break;
                }
            }
            else{
                tmp2++;
                //console.log('tmp1 : ', tmp1);
                //console.log('tmp2 : ', tmp2);
                if(tmp1 == tmp2){
                    //break;
                    i++;
                    answer++;
                    s = s.slice(i,);
                    //console.log('se s : ', s);
                    //console.log('se i : ', i);
                    i = 0;
                    break;
                }
            }
        }
    }
    
    
    
    return answer;
}