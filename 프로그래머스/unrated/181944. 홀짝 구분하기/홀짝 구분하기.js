//1점
//문제에 모르는 문법천지라서 좀 어려웠음
//return이 아니라 console.log로 close부분에 내보내야 하는 문제
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let answer;
    n % 2 ? answer = `${n} is odd` : answer = `${n} is even`
    console.log(answer);
});
