//1점
//뭐 유독 특이하게 푼 사람은 없고 다 비슷하게 푼듯
function solution(letter) {
    answer = [];
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

    
    letter = letter.split(' ');
    // console.log(letter);
    for(let i = 0 ; i < letter.length ; i++){
        // Object.keys(morse).includes(letter[i]);
        answer.push(morse[letter[i]])
    }
    answer = answer.join('');
    return answer;
}