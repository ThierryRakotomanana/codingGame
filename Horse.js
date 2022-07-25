
let horse = [12,111,8,45,19,78,63,1,4,45,56,19,69,78,25,34,125,123,144,98,65,75,23,12,1123,161,149,15,101]
let W = new Map()
    for (let i = 0; i < horse.length; i++) W[horse[i]] = parseInt(horse[i])
let A = [], i = 0, Z = new Map()
for(let value in W){
    A.push(W[value])
    if(A[i-1] != undefined){
        Z[(A[i] - A[i-1])] = [ A[i] - A[i-1]]
    }
    i++
}
for (const key in Z) {
    if (Object.hasOwnProperty.call(Z, key)) {
        console.log(key);
        break
    }
}