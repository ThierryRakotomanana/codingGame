let horse = [111,8,1,19,63,4,45,56,69,78,25,34,125,123,144,98,65,75,23,12,1123,161,149,15,101,8,1,19,63,4,45,56,69,78,25,34,125,123,144,98,65,75,23,12,1123,161,149,15,101]
let W = new Map()
for(let i = 0; i < horse.length; i++){
    W[horse[i]] = W[horse[i]] == undefined ? 1 : (++W[horse[i]])
}
let arr = [] , i = 0, maMap = new Map();
for(let value in W){
    for(let j = 0; j < W[value]; j++){
        arr.push(value)
        if(arr[i-1] != undefined){
            maMap[(arr[i] - arr[i-1])] = arr[i] - arr[i-1]
        }
        i++
    }
}
for (const key in maMap) {
  console.log(`${key}`);
  break
}