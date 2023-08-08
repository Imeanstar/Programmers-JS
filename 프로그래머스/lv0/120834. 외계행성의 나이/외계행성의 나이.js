//1점
//다른 사람들 보니까 map으로 많이 푼듯
//문자열도 index로 접근 가능하다는 점 생각하기
function solution(age) {
    var answer = [];
    let ten = 10;
    while(age>=1){
        answer.push(String.fromCharCode(age%10+97));
        age = Math.floor(age/10);
    }
    answer.reverse();
    answer = answer.join('')
    return answer;
}