/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var min = 10000;
for(let i = 0; i < n ; i++ ) {
    if(min  > Math.abs(parseInt(inputs[i]))) min = Math.abs(parseInt(inputs[i]))
}

if ( inputs.length === 1 && inputs[0] === "" ){
  console.log(0)
} else if( inputs.indexOf(min.toString()) === -1 ){
  console.log( -1*min )
} else console.log(min)