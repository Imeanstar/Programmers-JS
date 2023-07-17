function solution(my_string, n) {
    var answer = '';
    my_string = my_string.split('');
    for(let i = 0 ; i < my_string.length ; i++){
        let val = '';
        for(let j = 0 ; j < n ; j++){
            val += my_string[i];
        }
        my_string[i] = val;
    }
    answer = my_string.join('');
    return answer;
}