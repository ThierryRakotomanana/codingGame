


let words = []
words[0] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','efg','efgh','efghi','efghij','efghijk','efghijkl'] 
words[1] = ["a","b","ba","bca","bda","bdca", 'c' , 'e','cd','cde','fcde','ce','fcdek','bdkca']
words[2] = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
words[0] = ["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]


function indexOfString(arrPrev, arr){
  if(arr != undefined && arrPrev != undefined){
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
  }

  return false
}

chain = new Map()
let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY
for(let i = 0; i < words[0].length ; i++){
  const element = words[0][i], lenght = element.length
  lenght < min ? min = lenght : min = min
  max < lenght ? max = lenght : max = max
  chain[lenght] != undefined ? (chain[lenght].indexOf(element) == -1 ? chain[lenght].push(element) : chain[lenght] = chain[lenght] ) : chain[lenght] = new Array(element)
}
let longChain = [],  compteur = 0, position = []

for(let i= min ; i < max ; i++ ){
    for(let n = 0; n < chain[i].length ; n++){
        if(chain[parseInt(i) - 1 ] == undefined){
          let value = chain[i][n] ,p = i+1, successor = chain[p], a = 0
          do{
            if(indexOfString(value, successor[a])){
              position.indexOf(value) == -1 ? position.push(value) : position = position
              position.indexOf(successor[a]) == -1 ? position.push(successor[a]) : position = position
              value = successor[a]
              p++
              successor = chain[p]
              a = 0
            } else{
             a++ 
            }
          } while (successor!= undefined && p != max +1 && successor[a]!= undefined)
          longChain.push([position.length, p - min])
          a = 0
          position = []
        }else {
            for(let j = 0; j < chain[parseInt(i) - 1 ].length ; j++){
                if(!(indexOfString( chain[parseInt(i) - 1 ][j] , chain[i][n]))){
                compteur++
                }
            }
            if(compteur === chain[parseInt(i) - 1 ].length){
              let value = chain[i][n] ,p = i+1, successor = chain[p], a = 0
              do{
                if(indexOfString(value, successor[a])){
                  position.indexOf(value) == -1 ? position.push(value) : position = position
                  position.indexOf(successor[a]) == -1 ? position.push(successor[a]) : position = position
                  value = successor[a]
                  p++
                  successor = chain[p]
                  a = 0
                } else{
                  a++
                }
              } while (successor != undefined && p != max +1 && successor[a] != undefined)
              longChain.push([position.length, p - i])
              position = []
            }
            compteur = 0
        }
    }

}

console.log(longChain)

/* Try to use iterate


while(misy successeur){
  valeur-precedente = value /string
  tab = tableau a parcourir
  pour chauque valeur de tab[i]
    if(tab[i] et valeur misy ifandraisany){
      value = tab[i]
      tab = nextTab  
    }else{
  
    }
}
*/

do{
  for (let i = 0; i >= predecessor.length ; i++) {
    for (let j = 0; j >= successor.length ; j++) {
      if(indexOfString(predecessor[i], successor[j])){
        count++
        newSuccessor.push(successor[j])
        push(predecessor[i], successor[j])
      }
    }
    if(count == successor.length){
      condition = false
    }else{
      condition =true
      predecessor = newSuccessor
      successor = chain[p+1]

    }
  }
}while(condition)