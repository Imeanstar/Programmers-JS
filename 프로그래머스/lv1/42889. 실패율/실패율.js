function solution(N, stages) {
   // N = 2;
    //stages = [1,1,1,1];
    let count = new Array(N+1).fill(0);
    let fail = new Array(N+1).fill(0);
    fail[0] = -10;
    let numOfPeople = 0;
    var answer = [];
    // console.log(fail);
    for(let i = 1 ; i<=N+1 ; i++){
        count[i] = stages.filter(element => i == element).length;
    }
    
    for(let k = 0 ; k <= N+1 ; k++){
        numOfPeople += count[k];
    }
    console.log(count);
    console.log(fail);
    for(let j = 1 ; j < N+1 ; j++){
        fail[j] = count[j]/numOfPeople;
        if(numOfPeople == count[j]){
            numOfPeople = 1;
        }
        else{
            numOfPeople -= count[j];
        }
        
        //console.log('실패비율 : ' +fail[j]);
    }
    console.log(fail);
    for(let q = 0 ; q < N ; q++){
        //console.log(Math.max(...fail));
        answer.push(fail.indexOf(Math.max(...fail)));
        fail[fail.indexOf(Math.max(...fail))] = -1;
    }
    return answer;
}