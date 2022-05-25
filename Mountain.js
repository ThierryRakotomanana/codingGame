
/*

Try to find the index of the mountain who have the height more big
*/
// game loop

while (true) {
    let Height = []
    for (let i = 0; i < 8; i++) {
        Height[i] = parseInt(readline()); // represents the height of one mountain.
        
    }
    /*
    Let's copy the array Height
    */
    let Maximum = [] ;
    let max = 0;
    for (i = 0; i < Height.length; i++) {
        Maximum[i] = Height[i];
      }
    /* 
    Find the maximu value
    */
    for (let i = 0; i < 7; i++) {
        if(Height[i] < Height[i+1]) {
            max = Height[i+1]
        } else {
            max = Height[i];
            Height[i] = Height[i+1];
            Height[i+1] = max
        }
        
    }
    
    console.log(Maximum.indexOf(Height[7]));

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

        // The index of the mountain to fire on.

}
