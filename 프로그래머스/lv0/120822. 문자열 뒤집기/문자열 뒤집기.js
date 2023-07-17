function solution(my_string) {
    my_string = my_string.split('');
    var answer = '';
    my_string = my_string.reverse();
    answer = my_string.join('');
    return answer;
}