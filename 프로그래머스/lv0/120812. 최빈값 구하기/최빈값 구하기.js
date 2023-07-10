function solution(array) {
    var answer = 0;
    
    let longarr = [];
    for(let i = 0 ; i < 1000 ; i++){
        longarr[i] = 0;
    }
    // for(let i = 0 ; i < 1000 ; i++){
    //     longarr[i] = i;
    // }
    let j = 0;
    while(j < array.length){
        longarr[array[j]] += 1;
        j++
    }
    console.log(array[0]);
    let temp = -1;
    let temp2 = -1;
    let memory_when = -1;
    for(let k = 0 ; k < 1000 ; k+=1){
        if(temp < longarr[k]){
            temp = longarr[k]; 
            memory_when = k;
        }
        else if(temp == longarr[k]){
            answer = -1;
            temp2 = temp;
        }
    }
    if(temp > temp2){
        answer = temp;
        return memory_when;
    }
    else if(temp == temp2){
        return -1;
    }
    
    
    
    
}