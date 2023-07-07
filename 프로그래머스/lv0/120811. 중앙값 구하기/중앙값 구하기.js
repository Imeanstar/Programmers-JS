//4점
function solution(array) {
    
    //변수 설정
    let i = 0;
    let j = 0;
    let temp = 0;
    let tmp = 0;
    let small = 999;
    let middle = 0;
    
    //2단 반복문
    //첫 번째 반복문은 비교하는 배열의 크기 조절
    while(i < array.length){
        //두 번째 반복문은 비교하는 숫자의 순서 조절
        while(j < array.length){
            //만약 배열의 숫자가 small변수보다 작다면(처음에 small을 999로 설정)
            if(array[j] < small){
                //small에 배열의 숫자 대입
                small = array[j];
                //tmp라는 임시 변수에 j번째 숫자 대입했다고 저장
                tmp = j;
            }
            //모든 배열의 숫자 돌아야 됨.
            j++;
        }
        //한 바퀴 돌고 나서 최종 정산
        //j번째 저장한 배열의 자리에 i번째 숫자 저장(둘이 자리 바꿔주는 역할) 
        array[tmp] = array[i];
        //i번째 자리에 small값 저장(i~arraylength 까지중에 제일 작은 수) 
        array[i] = small;
        i++;
        //j를 i에 맞게 수정
        j = i;
        //다시 small을 999로 가장 크게 설정
        small = 999;
    }
    //중앙값은 array가 항상 홀수면 절반 나누고 뒤에 값 떼면 됨
    middle = parseInt(array.length/2);
    //그리고 array의 middle값 출력
    return array[middle];
}