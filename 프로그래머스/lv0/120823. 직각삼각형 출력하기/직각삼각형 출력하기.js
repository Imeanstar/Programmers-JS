//1점
//console.log는 출력하면 줄바꿈이 필연적으로 발생
//process.stdout.write사용해서 줄바꿈없는 console.log 출력
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1 ; i <= input[0] ; i++){
        for(let j = 0 ; j < i ; j++){
            process.stdout.write('*');
        }
        console.log('');
    }
    
    
});