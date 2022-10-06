/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
let only = true, X = 0, Y = 0, position = 0, position1 = 0 ;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    if(only === true){
        X = H - (X0 + 1) 
        Y = W - (Y0 + 1) 
        position0 = X0 
        position1 = Y0 
    }else{
        X = X
        Y = Y
    }
    if(bombDir == 'U'){
        Y0 = Y0 + Math.round(Y/2)
        Y = Math.round(Y/2)
    }else if(bombDir == "UR"){
        X0 = X0 + Math.round(X/2)
        X = Math.round(X/2)
        Y0 = Y0 + Math.round(Y/2)
        Y = Math.round(Y/2)
    }else if(bombDir == "R"){
        X0 = X0 + Math.round(X/2)
        X = Math.round(X/2)
    }else if(bombDir == "DR"){
        X0 = X0 + Math.round(X/2)
        X = Math.round(X/2)
        Y0 = Y0 - Math.round(Y/2)
        Y = Math.round(Y/2)
    }else if(bombDir == "D"){
        Y0 = Y0 - Math.round(Y/2)
        Y = Math.round(Y/2)
    }else if(bombDir == "DL"){
        X0 = X0 - Math.round(X/2)
        X = Math.round(X/2)
        Y0 = Y0 - Math.round(Y/2)
        Y = Math.round(Y/2)
    }else if(bombDir == "L"){
        X0 = X0 - Math.round(X/2)
        X = Math.round(X/2)
    }else if(bombDir == "UL"){
        X0 = X0 + Math.round(X/2)
        X = Math.round(X/2)
        Y0 = Y0 - Math.round(Y/2)
        Y = Math.round(Y/2)
    }
    only = false

    console.log(X0," ",Y0)
    // the location of the next window Batman should jump to.
}
