//1점
//map이나 filter를 쓰고 싶었는데
//filter는 프로그래머스에서 인식을 못하는 것 같고
//splice도 프로그래머스에서 인식을 못하는 것 같음
//그래서 split하고 join을 통해 null을 넣어줘서 배열에서 없애주는 방식으로 진행
function solution(my_string, letter) {
    var answer = '';
    let tmp = -2;
    while(tmp != -1){
        tmp = my_string.indexOf(letter);
        my_string = my_string.split('');
        my_string[tmp] = null;
        my_string = my_string.join('');
        //const answer = my_string.split(letter).join('')
        //내 코드를 가장 깔끔하게 압축해둔 코드인듯 ㄷㄷ
        //
        //return my_string.replaceAll(letter, "");
        //이런 코드도 있음
    }
    
    
    answer = my_string
    return answer;
}