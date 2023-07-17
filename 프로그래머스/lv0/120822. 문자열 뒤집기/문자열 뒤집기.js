//1점
//split, join, reverse method사용 문제
function solution(my_string) {
    my_string = my_string.split('');
    var answer = '';
    my_string = my_string.reverse();
    answer = my_string.join('');
    return answer;
}