process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    let line1 = lines[0].split(" ");
    let k = line1[0]; //人数
    let n = line1[1]; // 問題数
    let answer = "";
    
    for(let i = 1; i <= k; i++){
        
    let line2 = lines[i].split(" ");
    let d_1 = line2[0]; //日数
    let a_1 = line2[1]; //正解数
    
    //判定
    let ten = Math.floor(a_1 / n * 100);
    
    if(d_1 <= 0){
        ten;
    }else if(d_1 <= 9){
        ten = Math.floor(ten * 0.8);
    }else if(9 < d_1){
        ten = 0;
    }
    
    
    
    if(80 <= ten){
        answer = "A";
    }else if(70 <= ten){
        answer = "B";
    }else if(60<= ten){
        answer = "C";
    }else if(0 <= ten){
        answer = "D";
    }
    console.log(answer);
    
  
        
    }

});
