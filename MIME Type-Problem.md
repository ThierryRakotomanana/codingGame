## SOLVE UNARY PROBLEM
 >link is bellow
[Probleme NAME](https://www.codingame.com/ide/puzzle/mime-type)

## External ressource usefull
Try to see this concept before to solve problem
 ''[Masquage](https://fr.wikipedia.org/wiki/Masquage) , [Décalage de bits](https://fr.wikipedia.org/wiki/Op%C3%A9ration_bit_%C3%A0_bit#D.C3.A9calages_de_bit) , [Table ASCII](http://ascii.cl/)

## What you'll learn
You will leanr this concept
 ''Chaînes de caractères, Encodage, Boucles, Conditions

## Solution
[link to solution](./nameOfFile-Solution.js)

### Description

    Objectif
Le type MIME est utilisé dans de nombreux protocoles internet pour associer un type de média (html, image, vidéo, ...) avec le contenu envoyé. Ce type MIME est généralement déduit de l'extension du fichier à transférer.

Vous devez écrire un programme qui permet de détecter le type MIME d'un fichier à partir de son nom.
    Règles
Une table qui associe un type MIME avec une extension de fichier vous est fournie. Une liste de noms de fichier à transférer vous sera aussi fournie et vous devrez déduire pour chacun d'eux, le type MIME à utiliser.

L'extension d'un fichier se définit par la partie du nom qui se trouve après le dernier point qui le compose.
Si l'extension du fichier est présente dans la table d'association (la casse ne compte pas. ex : TXT est équivalent à txt), alors affichez le type MIME correspondant . S'il n'est pas possible de trouver le type MIME associé à un fichier, ou si le fichier n'a pas d'extensions, affichez UNKNOWN.
    Entrées du jeu
Entrée
Ligne 1: Nombre N d’éléments composant la table d'association. 

Ligne 2 : Nombre Q de noms de fichiers à analyser.

N lignes suivantes : Une extension de fichier par ligne et son type MIME correspondant (séparé par un espace).

Q lignes suivantes : Un nom de fichier par ligne.

Sortie
Pour chacun des Q noms de fichiers, afficher sur une ligne le type MIME associé. S'il n'y a pas de correspondance, afficher UNKNOWN.
Contraintes
0 < N < 10000
0 < Q < 10000
Les extensions de fichiers sont composées d'un maximum de 10 caractères ascii alphanumériques.
Les type MIME sont composés d'un maximum de 50 caractères ascii alphanumérique et de ponctuations.
Les noms de fichiers sont composés d'un maximum de 256 caractères ascii alphanumériques et points.
Il n'y a pas d'espaces dans les noms de fichiers, les extensions et les types MIME.
Exemple
Entrée
2
4
html text/html
png image/png
test.html
noextension
portrait.png
doc.TXT
Sortie
text/html
UNKNOWN
image/png
UNKNOWN