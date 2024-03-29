
let words = ["a","b","ba","bca","bda","bdca", 'c' , 'e','efg','efgh','efghi','efghij','efghijk','efghijkl'] 
words[0] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','cd','cde','fcde','ce','fcdek','bdkca']
words[0] = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
words[1] = ["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]


// return an array of length
function length(arr){
    let length = []
    for(let i = 0; i < arr.length ; i++){
      length[i] = arr[i].length
    }
    return length
}

// delete Doublon in array
function deleteDoublon(arr){
    let shortArray = []
    for(let i = 0; i < arr.length ; i++){
      if(shortArray.indexOf(arr[i]) == -1) shortArray.push(arr[i])
    }
    return shortArray
}

//Ordinary
function ordinary(arr){
    let max = 0
    for(let j = 0; j < arr.length ; j++){
        for (let i = 0 ; i < arr.length - j; i++) {
            if(i != arr.length -1 ){
                if(arr[i] < arr[i+1]) {
                    max = arr[i+1]
                } else {
                    max = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = max
                }    
            }
                
        }
    }
    return arr   
}


//return string who have same length
function listOfIndexOfString(arr, length){
  let values = []
  for(let i = 0; i < arr.length ; i++){
    if( arr[i].length == length) values.push(arr[i])
  }
  return values
}

function searchIndex(value, arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if(value == arr[i]){
            console.log(i)
            return i
        }
    }
    return -1
}
/*
//verify if all values of arr is in inArr
function indexOfString(arr , inArr){
  let isInArray = false
  let compteur = 0
  if(arr.length == inArr.length - 1 && 1 < arr.length ){
    for(let i = 0; i < arr.length -1; i++){
      if( inArr.indexOf(arr[i]) != -1 && inArr.indexOf(arr[i]) < searchIndex(arr[i+1], inArr)){
        ++compteur
      }
    }
    if(compteur == arr.length - 1) isInArray = true
  } else if(arr.length == 1 && inArr.indexOf(arr[0]) != -1){
    isInArray = true
  }
  return isInArray
}
*/
function indexOfString(arr , inArr){
  let isInArray = false
  let compteur = 0
  if(arr.length == inArr.length - 1 && 1 < arr.length ){
    for(let i = 0; i < arr.length -1; i++){
      if( inArr.indexOf(arr[i]) != -1 && (searchIndex(arr[i], inArr) < searchIndex(arr[i+1], inArr))){
        ++compteur
      }
    }
    if(compteur == arr.length - 1) isInArray = true
  } else if(arr.length == 1 && inArr.indexOf(arr[0]) != -1){
    isInArray = true
  }
  return isInArray
}


function Clone(arr){
  let clone = []
  for(let i = 0; i < arr.length ; i++ ){
    clone[i] = arr[i]
  }
  return clone
}

function compareValue(value , arr, p, chain, position, longChain ){
    for(let i = 0; i < arr.length; i++ ){
        if(indexOfString(value , arr[i])){
            position.indexOf(value) == -1 ? position.push(value) : position = position
            position.indexOf(arr[i]) == -1 ? position.push(arr[i]) : position = position
            if(arr != chain[chain.length -1]){
              compareValue(arr[i] , chain[p+1], p+1, chain, position, longChain)
            }else{/*
              let clone = []
              Clone(position)an array in an array mean reference to reference
              longChain.push(clone)*/
              longChain.push(Clone(position))// to avoid reference by passing by value
              let k = position.length - 1
              for(let i = 0; i < k ; i++ ){
                position.pop()
              }
            }
        }
    }
}

function compareArray(first, second, p , chain, position, longChain){
    for(let i = 0; i < first.length; i++ ){
        compareValue(first[i] , second, p, chain, position, longChain)
        position = []
    }
}
/*
let Length = length(words[0])
let del = ordinary(deleteDoublon(Length))
let chain = [], longChain = [], position = []
for(let i = 0; i < del.length ; i++){
  chain[i] = listOfIndexOfString(words[0], del[i])
}
compareArray(chain[0], chain[1], 1, chain, position, longChain)
*/

console.log(indexOfString("zczpzvh","zczpzvhx"))
console.log('Hello Enjo')