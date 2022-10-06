/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    let remainingTurns = parseInt(readline())
   // remainingTurns = remainingTurns > (distX + distY) ? remainingTurns : (distX + distY) ; // The remaining amount of turns Thor can move. Do not remove this line.

    if ( initialTx - lightX  < 0 ) {
  
        if(initialTy - lightY > 0 ) {
          console.log('NE')
          initialTx = initialTx + 1
          initialTy = initialTy - 1
        } else if (initialTy - lightY === 0){ 
            console.log('E')
            initialTx = initialTx + 1
        } else {
          console.log('SE')
          initialTx = initialTx + 1
          initialTy = initialTy + 1
        }
        
      } else if ( initialTx - lightX > 0 ) {
        
        if(initialTy - lightY > 0 ) {
          console.log('NW')
          
          initialTx = initialTx - 1
          initialTy = initialTy - 1
        } else if (initialTy - lightY === 0) { 
          console.log('W')
          initialTx = initialTx - 1
        } else {
            console.log('SW')
            initialTx = initialTx - 1
            initialTy = initialTy + 1
        }
        
      } else if( initialTx - lightX === 0 ) {
        if (initialTy - lightY > 0 ) { 
          console.log('N')
          initialTy = initialTy - 1
        } 
        else if ( initialTy - lightY < 0){ 
          console.log('S')
          initialTy = initialTy + 1
        }
      }      
}
