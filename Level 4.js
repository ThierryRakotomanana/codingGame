/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var TabNeg = []
var TabPos = []
for (let i = 0; i < n; i++) {
    if(parseInt(inputs[i]) < 0 ){
        TabNeg.push(parseInt(inputs[i]));
        continue
    }
    TabPos.push(parseInt(inputs[i]));// a temperature expressed as an integer ranging from -273 to 5526
}

var max = 0
function Arrange(Tab = [], n = Tab.length) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            if(Tab[j+1] < Tab[j] ){
                max = Tab[j]
                Tab[j] = Tab[j+1]
                Tab[j+1] = max 
            }
        }
    }
}

Arrange(TabNeg, TabNeg.length)
Arrange(TabPos, TabPos.length)

if( !(!TabNeg.length) && !(!TabPos.length)){
    if(Math.abs(TabNeg[TabNeg.length-1]) < TabPos[0]){
        console.log(TabNeg[TabNeg.length-1])
    }else if(Math.abs(TabNeg[TabNeg.length-1]) === TabPos[0] || Math.abs(TabNeg[TabNeg.length-1]) > TabPos[0]){
        console.log(TabPos[0])
    }
}else{
   if(!TabNeg.length && !TabPos.length){
     console.log(0)
  }else if(!TabPos.length){
    console.log(TabNeg[TabNeg.length - 1])
  }else{
    console.log(TabPos[0])
  }
}
