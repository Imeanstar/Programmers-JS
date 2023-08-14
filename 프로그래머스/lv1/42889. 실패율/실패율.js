//9점... 이었던걸로 기억함
//문제 이름이 실패율 인 만큼 실패율 정렬하는게 가장 핵심인 문제
function solution(N, stages) {
    let count = new Array(N+1).fill(0);
    let fail = new Array(N+1).fill(0);
    fail[0] = -10;
    let numOfPeople = 0;
    var answer = [];
    for(let i = 1 ; i<=N+1 ; i++){
        count[i] = stages.filter(element => i == element).length;
    }
    
    for(let k = 0 ; k <= N+1 ; k++){
        numOfPeople += count[k];
    }
    console.log(count);
    console.log(fail);
    for(let j = 1 ; j < N+1 ; j++){
        //여기서 0/0이 되어서 NaN이 나오는 이슈가 발생하였음
        //MaxStage가 2Stage인데 모두 1에서 막혀있으면 0/0이 발생
        //그래서 만약 둘 다 0이면 numOfPeople=1 되어서 0/1이 되도록 만들어줌
        if(numOfPeople == count[j] && numOfPeople == 0){
            numOfPeople = 1;
        }
        //둘 다 0 이 아닌경우에는 현재 스테이지에 있는 사람만큼 총 인원에서 빼줌(실패율계산용)
        else{
            numOfPeople -= count[j];
        }
        //실패율 계산
        fail[j] = count[j]/numOfPeople;
    }
    console.log(fail);
    for(let q = 0 ; q < N ; q++){
        //가장 실패율 높은 index를 answer배열에 push
        answer.push(fail.indexOf(Math.max(...fail)));
        //가장 실패율 높았던 녀석을 -1로 설정하여 안나타나게
        fail[fail.indexOf(Math.max(...fail))] = -1;
    }
    return answer;
}