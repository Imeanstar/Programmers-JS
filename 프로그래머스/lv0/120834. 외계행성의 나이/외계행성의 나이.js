function solution(age) {
    var answer = [];
    let ten = 10;
    while(age>=1){
        answer.push(String.fromCharCode(age%10+97));
        age = Math.floor(age/10);
    }
    // console.log(ten);
    answer.reverse();
    answer = answer.join('')
    return answer;
}