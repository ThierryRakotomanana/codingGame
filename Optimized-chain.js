function havePredecessor(firstArr, secondArr, longChain, p, chain){
    let compteur = 0, secondArrLength = secondArr.length, firstArrLength
    if(firstArr != undefined){
        firstArrLength = firstArr.length
    }
    for(let i = 0; i < secondArrLength ; i++){
        if(firstArr == undefined){
            compareValue(secondArr[i] , chain[p+1], p+1, chain, longChain, 0)
        }else {
            for(let j = 0; j < firstArrLength ; j++){
                if(!(indexOfString( firstArr[j] , secondArr[i]))){
                compteur++
                }
            }
            if(compteur === firstArrLength){
                compareValue(secondArr[i] , chain[p+1], p+1, chain, longChain, p)
            }
            compteur = 0
        }
    }
    
}