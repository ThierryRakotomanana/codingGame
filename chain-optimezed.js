


let words = []
words[0] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','efg','efgh','efghi','efghij','efghijk','efghijkl'] 
words[1] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','cd','cde','fcde','ce','fcdek','bdkca']
words[2] = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
words[0] = ["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]


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

function indexOfString(arrPrev, arr){
  let j = 0, compteur = 0
  for(let i = 0; i < arr.length; i++){
    if(arrPrev[j] === arr[i]){
      compteur ++
      if(arrPrev[j+1] === undefined){
        break
      }
      j++
    }
  }
  if(compteur == arrPrev.length && arrPrev.length + 1 == arr.length){
    return true
  }
  return false
}
/*
function compareValue(value , arr, p, chain, longChain){
  let compteur = 0
    for(let i = 0; i < arr.length; i++ ){
        if(indexOfString(value , arr[i])){
            if(arr != chain[chain.length -1]){
              compareValue(arr[i] , chain[p+1], p+1, chain, longChain)
            }else{
              longChain.push(p+1)
            }
        }else {
          compteur++
        }
    }
    if(compteur == arr.length){
    longChain.push(p+1)
  }
}
*/

function Clone(arr){
    let clone = []
    for(let i = 0; i < arr.length ; i++ ){
      clone[i] = arr[i]
    }
    return clone
  }
  
  function compareValue(value , arr, p, chain,position, longChain, initialPosition){
    let compteur = 0
      for(let i = 0; i < arr.length; i++ ){
          if(indexOfString(value , arr[i])){
            position.indexOf(value) == -1 ? position.push(value) : position = position
            position.indexOf(arr[i]) == -1 ? position.push(arr[i]) : position = position
              if(arr != chain[chain.length -1]){
                compareValue(arr[i] , chain[p+1], p+1, chain, position, longChain, initialPosition)
              }else if(position.length != 0){
                longChain.push(Clone(position),p + 1 - initialPosition)// to avoid reference by passing by value
                let k = position.length
                for(let i = 0; i < k ; i++ ){
                  position.pop()
                }
              }
          }else {
            compteur++
          }
      }
      if(compteur == arr.length && position.length != 0){
        longChain.push(Clone(position), p - initialPosition)// to avoid reference by passing by value
        let k = position.length - 1
        for(let i = 0; i < k ; i++ ){
          position.pop()
        }
    }
  }

function havePredecessor(firstArr, secondArr, longChain, p, chain){
  console.log(firstArr)
    let compteur = 0, position = []
    for(let i = 0; i < secondArr.size ; i++){
        if(firstArr == undefined){
            compareValue(secondArr[i] , chain[p+1], p+1, chain,position, longChain, 0)
            position = []
        }else {
            for(let j = 0; j < firstArr.size ; j++){
                if(!(indexOfString( firstArr[j] , secondArr[i]))){
                compteur++
                }
            }
            if(compteur === firstArr.length){
                compareValue(secondArr[i] , chain[p+1], p+1, chain,position, longChain, p)
                position = []
            }
            compteur = 0
        }
    }
    
}
chain = new Map()
for(let i = 0; i < words[0].length ; i++){
  const element = words[0][i], lenght = element.length
  chain[lenght] != undefined ? (chain[lenght].indexOf(element) == -1 ? chain[lenght].push(element) : chain[lenght] = chain[lenght] ) : chain[lenght] = new Array(element)
}
let longChain = []

chain = new Map()
for(let i = 0; i < words[0].length ; i++){
  const element = words[0][i], lenght = element.length
  chain.has(lenght) ? (chain.get(lenght).indexOf(element) == -1 ? chain.get(lenght).push(element) : chain.get(lenght) = chain.get(lenght)) : chain.set(lenght,new Array(element))
}
for (const [key, value] of chain.entries()) {
  console.log(`${value}`);
}

for(let value of chain.keys()){
  console.log(chain[value])
  havePredecessor(chain[parseInt(value) - 1 ], chain[value], longChain, parseInt(value), chain)
}
console.log(longChain)