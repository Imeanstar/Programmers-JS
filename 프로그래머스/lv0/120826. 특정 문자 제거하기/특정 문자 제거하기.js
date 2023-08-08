function solution(my_string, letter) {
    var answer = '';
    let tmp = -2;
    while(tmp != -1){
        tmp = my_string.indexOf(letter);
        my_string = my_string.split('');
        my_string[tmp] = null;
        my_string = my_string.join('');
    }
    
    
    answer = my_string
    return answer;
}