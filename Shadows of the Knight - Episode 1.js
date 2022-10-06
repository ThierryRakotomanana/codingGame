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
        position1 = position1 + Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }else if(bombDir == "UR"){
        position0 = position0 + Math.round(X/2)
        X = Math.round(X/2)
        position1 = position1 + Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }else if(bombDir == "R"){
        position0 = position0 + Math.round(X/2)
        X = Math.round(X/2)
        console.log(position0," ",position1)
    }else if(bombDir == "DR"){
        position0 = position0 + Math.round(X/2)
        X = Math.round(X/2)
        position1 = position1 - Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }else if(bombDir == "D"){
        position1 = position1 - Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }else if(bombDir == "DL"){
        position0 = position0 - Math.round(X/2)
        X = Math.round(X/2)
        position1 = position1 - Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }else if(bombDir == "L"){
        position0 = position0 - Math.round(X/2)
        X = Math.round(X/2)
        console.log(position0," ",position1)
    }else if(bombDir == "UL"){
        position0 = position0 + Math.round(X/2)
        X = Math.round(X/2)
        position1 = position1 - Math.round(Y/2)
        Y = Math.round(Y/2)
        console.log(position0," ",position1)
    }
    only = false
    // the location of the next window Batman should jump to.
}
