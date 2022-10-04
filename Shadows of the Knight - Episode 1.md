## SOLVE shadows of the knight episode 1 PROBLEM
 >link is bellow
[shadows-of-the-knight-episode-1](https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-1)

## External ressource usefull
Try to see this concept before to solve problem
 ''[Multidimensional array](https://fr.wikipedia.org/wiki/Tableau_(structure_de_donn%C3%A9es)) , [Dichotomous search](https://fr.wikipedia.org/wiki/Op%C3%A9ration_bit_%C3%A0_bit#D.C3.A9calages_de_bit) , [2D Binary Search explained by Gaurav Sen](https://www.youtube.com/watch?v=4R9PyTvcWE0)


## What you'll learn
The following concepts can help you solve this puzzle. Discover them and put them into practice to continue your progress.

[Dichotomous search](https://www.codingame.com/learn/binary-search)
[Intervals](https://www.codingame.com/learn/intervals)

## Solution
[link to solution](./Shadows%20%of%20%the%20%Knight%20%-%20%Episode%20%1.js)

### Read instructions below

    Objectif
Vous allez rechercher les otages d'un batiment donné en sautant de fenêtre en fenêtre à l'aide de votre grappin. Votre but est d'arriver sur la fenêtre de la pièce où les otages se trouvent afin de désamorcer les bombes. Malheureusement vous n'avez qu'un nombre de sauts limités avant que les bombes n'explosent...

    Règles
Avant chaque saut, le détecteur vous fournira la direction des bombes par rapport à votre position actuelle :
    
    U (Up : les bombes sont situées au dessus)
    UR (Up-Right : les bombes sont situées au dessus et à droite)
    R (Right : les bombes sont situées à droite)
    DR (Down-Right : les bombes sont situées en dessous et à droite)
    D (Down : les bombes sont situées en dessous)
    DL (Down-Left : les bombes sont situées en dessous et à gauche)
    L (Left : les bombes sont situées à gauche)
    UL (Up-Left : les bombes sont situées au dessus et à gauche)

Votre mission consiste à programmer le détecteur afin qu'il indique la position de la fenêtre sur laquelle vous devrez vous rendre au saut suivant de sorte que vous atteignez les bombes le plus tôt possible.

Les bâtiments sont représentés par des rectangles de fenêtres, la fenêtre en haut à gauche a pour position (0,0).

    Note
Pour certains tests, la position des bombes varie d'une exécution à l'autre. L'objectif est de vous aider à trouver le meilleur algorithme possible.

Les tests fournis et les validateurs utilisés pour le calcul du score sont similaires mais différents.

    Entrées du jeu
Le programme doit d'abord lire les données d'initialisation depuis l'entrée standard, puis, dans une boucle infinie, lire depuis l'entrée standard les données relatives à l'état courant et fournir sur la sortie standard les données demandées.

    Entrées d'initialisation
    Ligne 1 : 2 entiers W H. Le couple (W, H) représente la largeur et la hauteur du batiment en nombre de fenêtres.

    Ligne 2 : 1 entier N, qui représente le nombre de sauts que vous pouvez faire avant que les bombes n'explosent.

    Ligne 3 : 2 entiers X0 Y0, qui représentent votre position de départ.

    Entrée pour un tour de jeu
La direction vers laquelle se trouve la bombe.

    Sortie pour un tour de jeu
Une ligne unique avec 2 entiers X Y séparés par un espace. (X, Y) représente la position de la prochaine fenêtre sur laquelle vous devriez sauter. X représente l'index sur l'axe horizontal, Y représente l'index sur l'axe vertical. (0,0) se trouve dans le coin haut gauche du bâtiment.

    Contraintes
    1 ≤ W ≤ 10000
    1 ≤ H ≤ 10000
    2 ≤ N ≤ 100
    0 ≤ X, X0 < W
    0 ≤ Y, Y0 < H
Temps de réponse pour un tour ≤ 150ms
Temps de réponse pour un tour ≤ 150ms

    Example

|  | |
| :---------------: | ---------------:|
| Entrée d'initialisation 10 10     Le bâtiment a 100 fenêtres (10x10) 6         Vous devez trouver les bombes en 6 sauts 2 5       Vous commencez en position (2,5) ![image0](https://github.com/ThierryRakotomanana/codingGame/blob/main/images/Shadows%20of%20the%20Knoght%20-%20Episode%201/example0.png)  |  Pas de sortie attendue        |
| Entrée pour le tour 1 UR Les otages sont situés vers le haut et vers la droite ![image1](https://github.com/ThierryRakotomanana/codingGame/blob/main/images/Shadows%20of%20the%20Knoght%20-%20Episode%201/example1.png) | Sortie pour le tour 1    5 4     Vous sautez sur la fenêtre (5,4) |
| Entrée pour le tour 2     R   Les otages sont situés à votre droite ![image2](https://github.com/ThierryRakotomanana/codingGame/blob/main/images/Shadows%20of%20the%20Knoght%20-%20Episode%201/example2.png) | Sortie pour le tour 2  7 4     Vous sautez sur la fenêtre (7,4) |
| ![image3](https://github.com/ThierryRakotomanana/codingGame/blob/main/images/Shadows%20of%20the%20Knoght%20-%20Episode%201/example3.png)  |   Vous avez trouvé les otages. Vous pouvez désamorcer les bombes à temps. Vous avez gagné !   |