
let T = 'Sal*'
const MAJ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let Texte = T.toUpperCase().split('')
let affiche = ''

let Row = []
Row[0]  = ' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### '
Row[1]  = '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # '
Row[2]  = '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## '
Row[3]  = '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       '
Row[4]  = '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  '
let texte = []
let Asc = ''

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < Texte.length; j++) {
      if( MAJ.indexOf(Texte[j]) === -1){ 
        for (let k = 4 * parseInt(MAJ.length); k <  4 * parseInt(MAJ.length) + 4 ; k++) {
             Asc += Row[i][k]
          }
        affiche += Asc
        Asc = ''
      }else{
          for (let k = 4 * parseInt(MAJ.indexOf(Texte[j])); k <  4 * parseInt(MAJ.indexOf(Texte[j])) + 4 ; k++) {
             Asc += Row[i][k]
          }
          affiche += Asc
          Asc = ''
      } 
  }
  texte[i] = affiche
  affiche = ''
  console.log(texte[i])
}



/** IN CODING GAME
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
let Row = []
for (let i = 0; i < H; i++) {
    Row[i] = readline();
}
const MAJ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let Texte = T.toUpperCase().split('')
let affiche = ''
let texte = []
let Asc = ''

for (let i = 0; i < H; i++) {
  for (let j = 0; j < Texte.length; j++) {
      if( MAJ.indexOf(Texte[j]) === -1){ 
        for (let k = L * parseInt(MAJ.length); k <  L * parseInt(MAJ.length) + L ; k++) {
             Asc += Row[i][k]
          }
        affiche += Asc
        Asc = ''
      }else{
          for (let k = L * parseInt(MAJ.indexOf(Texte[j])); k <  L * parseInt(MAJ.indexOf(Texte[j])) + L ; k++) {
             Asc += Row[i][k]
          }
          affiche += Asc
          Asc = ''
      } 
  }
  texte[i] = affiche
  affiche = ''
  console.log(texte[i])
}
