let words = [];
words[0] = [
  "a",
  "b",
  "ba",
  "bca",
  "bda",
  "bdca",
  "c",
  "e",
  "efg",
  "efgh",
  "efghi",
  "efghij",
  "efghijk",
  "efghijkl",
];
words[1] = [
  "a",
  "b",
  "ba",
  "bca",
  "bda",
  "bdca",
  "c",
  "e",
  "cd",
  "cde",
  "fcde",
  "ce",
  "fcdek",
  "bdkca",
];
words[2] = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
words[0] = [
  "ksqvsyq",
  "ks",
  "kss",
  "czvh",
  "zczpzvdhx",
  "zczpzvh",
  "zczpzvhx",
  "zcpzvh",
  "zczvh",
  "gr",
  "grukmj",
  "ksqvsq",
  "gruj",
  "kssq",
  "ksqsq",
  "grukkmj",
  "grukj",
  "zczpzfvdhx",
  "gru",
];

/**
 * 
 * @param {string} firstString 
 * @param {string} secondString 
 * @returns {boolean} true if firstString is Predecessor of secondString
 */

function haveSuccessor(firstString, secondString) {
  if (secondString != undefined && firstString != undefined) {
    let j = 0,
      compteur = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (firstString[j] === secondString[i]) {
        compteur++;
        if (firstString[j + 1] === undefined) {
          break;
        }
        j++;
      }
    }
    if (compteur == firstString.length && firstString.length + 1 == secondString.length) {
      return true;
    }
  }

  return false;
}

function searchLonguestChain(predecessor, successor, chain, p) {
    let lengthOfSucc = successor.length, count = 0, newPredecessor = [], finalChain = []
    for (let index = 0; index < lengthOfSucc; index++) {
        if(haveSuccessor(predecessor, successor[index])){
            newPredecessor.push([predecessor, successor[index]])
        }else {
            count++
        }
    }
    if(count == lengthOfSucc){
        //return false
    } else {
        let condition = true, predecessor = newPredecessor
        p++
        successor = chain[p]
        do {
            count = 0
            lengthOfPredc = predecessor.length, lengthOfSucc = successor.length, newPredecessor = []
            for (let index = 0; index < lengthOfPredc; index++) {
                for (let i = 0; i < lengthOfSucc; i++) {
                    if(haveSuccessor(predecessor[index][predecessor[index].length -1], successor[i])){
                        newPredecessor.push(predecessor[index].concat(successor[i]))
                    }else{
                        count++
                    }
                }
                if(count == lengthOfSucc){
                    count = 0
                    if(predecessor[index].length != 0) finalChain = finalChain.concat(predecessor[index])
                }
            }
            if(newPredecessor.length != 0 && chain[p+1]!= undefined) {
                p++, predecessor = newPredecessor, successor = chain[p]
                condition = true
            } else {
                if(newPredecessor.length != 0) finalChain = finalChain.concat(newPredecessor)
                condition = false
            }
        } while (condition);
    }
    console.log(finalChain)
    return finalChain
}

let chain = new Map(), longuestChain = [];
let min = Number.POSITIVE_INFINITY,
  max = Number.NEGATIVE_INFINITY;
for (let i = 0; i < words[0].length; i++) {
  const element = words[0][i],
    lenght = element.length;
  lenght < min ? (min = lenght) : (min = min);
  max < lenght ? (max = lenght) : (max = max);
  chain[lenght] != undefined
    ? chain[lenght].indexOf(element) == -1
      ? chain[lenght].push(element)
      : (chain[lenght] = chain[lenght])
    : (chain[lenght] = new Array(element));
}

for (let i = min; i < max ; i++) {
  let predecessor = chain[i],
    successor = chain[i + 1];
  lengthOfPredc = predecessor.length;
  for (let j = 0; j < lengthOfPredc; j++) {
    let compteur = 0;
    if (chain[i - 1] === undefined) {
       longuestChain = longuestChain.concat(searchLonguestChain(predecessor[j], successor, chain, min + 1));
    } else {
      lengthOfPredChain =  chain[i - 1].length;
      for (let k = 0; k < lengthOfPredChain; k++) {
        if (!haveSuccessor( chain[i - 1][k], predecessor[j])) compteur++;
      }
      if (compteur == lengthOfPredChain) {
        longuestChain = longuestChain.concat(searchLonguestChain(predecessor[j], successor, chain, i + 1));
      }
    }
  }
}
//console.log(' Here is the function ', longuestChain)