function solution(numbers) {
    var answer = [];
    let i = 0;
    
    while(i < numbers.length){
        numbers[i] *= 2;
        i++
    }
    
    //강력한 복사 시행
    answer = [...numbers];
    
    return answer;
}