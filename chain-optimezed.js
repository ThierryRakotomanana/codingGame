


let words = []
words[0] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','efg','efgh','efghi','efghij','efghijk','efghijkl'] 
words[1] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','cd','cde','fcde','ce','fcdek','bdkca']
words[2] = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
words[0] = ["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]


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
function Clone(arr){
    let clone = []
    for(let i = 0; i < arr.length ; i++ ){
      clone[i] = arr[i]
    }
    return clone
  }
  
  function compareValue(value , arr, p, chain,position, longChain, initialPosition, max){
    let compteur = 0
      for(let i = 0; i < arr.length; i++ ){
          if(indexOfString(value , arr[i])){
            position.indexOf(value) == -1 ? position.push(value) : position = position
            position.indexOf(arr[i]) == -1 ? position.push(arr[i]) : position = position
              if(arr != chain[max]){
                compareValue(arr[i] , chain[p+1], p+1, chain, position, longChain, initialPosition, max)
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

function havePredecessor(firstArr, secondArr, longChain, p, chain, max){
  
    let compteur = 0, position = []
    for(let i = 0; i < secondArr.length ; i++){
        if(firstArr == undefined){
            compareValue(secondArr[i] , chain[p+1], p+1, chain,position, longChain, p, max)
            position = []
        }else {
            for(let j = 0; j < firstArr.length ; j++){
                if(!(indexOfString( firstArr[j] , secondArr[i]))){
                compteur++
                }
            }
            if(compteur === firstArr.length){
                compareValue(secondArr[i] , chain[p+1], p+1, chain,position, longChain, p, max)
                position = []
            }
            compteur = 0
        }
    }
    
}

chain = new Map()
let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY
for(let i = 0; i < words[0].length ; i++){
  const element = words[0][i], lenght = element.length
  lenght < min ? min = lenght : min = min
  max < lenght ? max = lenght : max = max
  chain[lenght] != undefined ? (chain[lenght].indexOf(element) == -1 ? chain[lenght].push(element) : chain[lenght] = chain[lenght] ) : chain[lenght] = new Array(element)
}
let longChain = []
// The next challenge is to reduce the function to make it more speed
for(let i= min ; i < max ; i++ ){
  havePredecessor(chain[parseInt(i) - 1 ], chain[i], longChain, parseInt(i), chain, max)
}

console.log(longChain)