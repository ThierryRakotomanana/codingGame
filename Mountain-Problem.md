## THE DESCENT PROBLEM
 >link is bellow
[THE DESCENT](https://www.codingame.com/training/easy/the-descent)

## External ressource usefull
Try to see this concept before to solve problem
 ''[Loop](https://fr.wikipedia.org/wiki/Structure_de_contr%C3%B4le#Boucles) , [Tri](https://fr.wikipedia.org/wiki/Algorithme_de_tri) , [ELSE](https://www.youtube.com/watch?v=t-tPMY9wdE8)

## What you'll learn
You will leanr this concept
 ''Variable, Boucles, Conditions

## Solution
[Mountain-Solution.js](./Mountain-Solution.js)

### Description
    Objectif
Écrivez le programme permettant de détruire les montagnes pour pouvoir endommager. Pour cela, tirez sur la montagne la plus haute.

    Règles
Au début de chaque tour de jeu , vous recevez en entrée la hauteur de chaque montagne de gauche à droite.
Avant la fin du tour de jeu , vous devez indiquer la montagne la plus haute pour tirer dessus.

Tirer sur une montagne ne fera qu'en détruire une partie. Votre vaisseau descend à chaque passe.
 
 
    Conditions de victoire
Vous gagnez si vous détruisez la montagne la plus haute à chaque tour
 
Conditions de défaite
Votre vaisseau percute une montagne
Vous fournissez une sortie invalide ou votre programme ne répond pas à temps

    Noter
N'oubliez pas d'exécuter les tests depuis la fenêtre "Jeu de tests". Les tests fournis et les validateurs utilisés pour le calcul du score sont légèrement différents pour éviter les solutions codées en dur.

    Entrées du jeu
Le programme doit lire depuis l'entrée standard la hauteur des montagnes puis fournir sur la sortie standard l'indice de la montagne à détruire.
Entrées pour un tour de jeu
8lignes : un entiermontagneHpar ligne. Il représente la hauteur d'une montagne. Les hauteurs des montagnes sont données dans l'ordre de leur index (allant de 0 à 7).

    Sortie pour un tour de jeu
Une ligne unique contenant le numéro de la montagne sur laquelle tirer.

    Contraintes
    0 ≤montagneH≤ 9
    Temps de réponse pour un tour ≤ 100ms