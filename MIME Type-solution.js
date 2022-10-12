/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline()); // Number of elements which make up the association table.
 const Q = parseInt(readline()); // Number Q of file names to be analyzed.
 let arr = []
 for (let i = 0; i < N; i++) {
     var inputs = readline().split(' ');
     const EXT = inputs[0].toLowerCase(); // file extension
     const MT = inputs[1]; // MIME type.
     arr[i] = [EXT,MT]
 }
 for (let i = 0; i < Q; i++) {
     let FNAME = readline(); // One file name per line.
     let FEX = FNAME.toLowerCase().split('.')
     let x = 0;
        for (let j = 0; j < N; j++){
            if (FEX[FEX.length-1] === arr[j][0] && FEX.length != 1){
                console.log(arr[j][1])
            } else {
                ++x
            }   
        }
        if( x === N ){
            console.log('UNKNOWN')
        }
 }
