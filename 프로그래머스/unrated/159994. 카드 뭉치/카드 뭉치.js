//6점
//이건 좀 쉬운데?
function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    for(let i = 0 ; i < goal.length ; i++){
        if(goal[i]==cards1[0]){
            cards1.shift();
            console.log(cards1);
        }
        else if(goal[i] == cards2[0]){
            cards2.shift();
            console.log(cards2);
        }
        else{
            answer = "No";
            break;
        }
    }
    
    return answer;
}