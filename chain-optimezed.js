


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
          let condition = true, p = min+1, finalChain =[], predecessor = chain[min], successor = chain[p], count = 0
          do{
            newpredecessor = []
            for (let i = 0; i <  predecessor.length ; i++) {
              count = 0
              for (let j = 0; j <  successor.length ; j++) {
                if(typeof predecessor[i] === 'string'){
                  if(indexOfString(predecessor[i], successor[j])){
                    count++
                    newpredecessor.push([predecessor[i], successor[j]])
                  }
                 }else if(indexOfString(predecessor[i][predecessor[i].length -1], successor[j])){
                  count++
                  newpredecessor.push(predecessor[i].concat(successor[j]))
               }
              }
              console.log(count, predecessor[i][predecessor[i].length -1] , successor)
              if(count == 0){
                
                  finalChain.push(predecessor[i])
              }
            }
            if(newpredecessor.length !=0 && successor != undefined){
              p++
              predecessor = newpredecessor
              successor = chain[p]
              condition = true
            }else{
              condition = false
            }
          }while(condition)
        }else {
            for(let j = 0; j < chain[parseInt(i) - 1 ].length ; j++){
                if(!(indexOfString( chain[parseInt(i) - 1 ][j] , chain[i][n]))){
                compteur++
                }
            }
            if(compteur === chain[parseInt(i) - 1 ].length){
              

            let condition = true, p = min+1, finalChain =[], predecessor = chain[min], successor = chain[p], count = 0
                      do{
                        newpredecessor = []
                        for (let i = 0; i <  predecessor.length ; i++) {
                          count = 0
                          for (let j = 0; j <  successor.length ; j++) {
                            if(typeof predecessor[i] === 'string'){
                              if(indexOfString(predecessor[i], successor[j])){
                                count++
                                newpredecessor.push([predecessor[i], successor[j]])
                              }
                             }else if(indexOfString(predecessor[i][predecessor[i].length -1], successor[j])){
                              count++
                              newpredecessor.push(predecessor[i].concat(successor[j]))
                           }
                          }
                          console.log(count, predecessor[i][predecessor[i].length -1] , successor)
                          if(count == 0){
                            
                              finalChain.push(predecessor[i])
                          }
                        }
                        if(newpredecessor.length !=0 && successor != undefined){
                          p++
                          predecessor = newpredecessor
                          successor = chain[p]
                          condition = true
                        }else{
                          condition = false
                        }
                      }while(condition) 
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
        newpredecessor.push(successor[j])
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




let longChain = [],  compteur = 0
let longuestChain = []
for(let i= min ; i < max ; i++ ){
    for(let n = 0; n < chain[i].length ; n++){
        if(chain[parseInt(i) - 1 ] == undefined){
          let condition = true, p = min+1, finalChain =[], predecessor = chain[min], successor = chain[p], count = 0
          do{
            newpredecessor = []
            for (let i = 0; i <  predecessor.length ; i++) {
              count = 0
              for (let j = 0; j <  successor.length ; j++) {
                if(typeof predecessor[i] === 'string'){
                  if(indexOfString(predecessor[i], successor[j])){
                    count++
                    newpredecessor.push([predecessor[i], successor[j]])
                  }
                 }else if(indexOfString(predecessor[i][predecessor[i].length -1], successor[j])){
                  count++
                  newpredecessor.push(predecessor[i].concat(successor[j]))
               }
              }
              if(count == 0){
                
                  finalChain.push(predecessor[i])
              }
            }
            if(newpredecessor.length !=0 && successor != undefined){
              p++
              predecessor = newpredecessor
              successor = chain[p]
              condition = true
            }else{
              condition = false
            }
          }while(condition)
            longuestChain = longuestChain.concat(finalChain)
        }else {
          compteur = 0
            for(let j = 0; j < chain[parseInt(i) - 1 ].length ; j++){
                if(!(indexOfString( chain[parseInt(i) - 1 ][j] , chain[i][n]))){
                compteur++
                }
            }
            if(compteur === chain[parseInt(i) - 1 ].length){
              
              console.log('ATO', chain[i-1].length, compteur, chain[i][n])
              
              let condition = true, p = i+1, finalChain =[], predecessor = [chain[i][n]], successor = chain[p], count = 0
                      do{
                        newpredecessor = []
                        for (let i = 0; i <  predecessor.length ; i++) {
                          count = 0
                          if(typeof successor == 'object'){
                            for (let j = 0; j <  successor.length ; j++) {
                            if(typeof predecessor[i] === 'string'){
                              if(indexOfString(predecessor[i], successor[j])){
                                count++
                                newpredecessor.push([predecessor[i], successor[j]])
                              }
                             }else if(indexOfString(predecessor[i][predecessor[i].length -1], successor[j])){
                              count++
                              newpredecessor.push(predecessor[i].concat(successor[j]))
                           }
                          }
                          }
                          if(count == 0){
                            
                              finalChain.push(predecessor[i])
                          }
                        }
                        if(newpredecessor.length !=0 && successor != undefined){
                          p++
                          predecessor = newpredecessor
                          successor = chain[p]
                          condition = true
                        }else{
                          condition = false
                        }
                      }while(condition) 
            compteur = 0
            longuestChain = longuestChain.concat(finalChain)
        }
    }

}
}
  console.log(longuestChain)