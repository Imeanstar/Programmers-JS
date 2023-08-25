function solution(answers) {
    var answer = [];
    let all = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    let ans = new Array(3).fill(0);
    for(let j = 0 ; j < 3 ; j++){
        for(let i = 0 ; i < answers.length ; i++){
            if(answers[i] == all[j][i%(all[j].length)]){
                ans[j]++;
            }
        }
    }
    //console.log(ans);
    let temp = [ans.indexOf(Math.max(...ans)),Math.max(...ans)];
    ans[temp[0]] = -1;
    let temp2 = [ans.indexOf(Math.max(...ans)),Math.max(...ans)];
    if(temp2[1] < temp[1]){
        answer = [temp[0]+1];
    }
    else{
        ans[temp2[0]] = -1;
        let temp3 = [ans.indexOf(Math.max(...ans)),Math.max(...ans)];
        if(temp2[1] > temp3[1]){
            return [temp[0]+1 , temp2[0]+1];
        }
        else{
            answer = [1 , 2 , 3]
        }
    }

    
    return answer;
}