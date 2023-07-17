function solution(phone_number) {
    var answer = '';
    phone_number = phone_number.split('');
    let len = phone_number.length;
    len -= 4;
    for(let i = 0 ; i < len ; i++){
        phone_number[i] = '*';
    }
    answer = phone_number.join('');
    return answer;
}