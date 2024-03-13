# TIPE

---

Aulys V. − Rendu du 15 mars

Mises à jour régulières sur https://aulysv.vercel.app/tipe 

## Concept général :

> Comment aborder des équations non linéaires ou d'ordre élevé grâce à des systèmes électriques analogiques ?

## Bibliographie :

| Source             | Contenu et utilité                                                                                                                                                                    | Lien(s)                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------- |
| Wikipedia          | Contexte historique et idées pas ou peu scientifiques                                                                                                                                 | https://en.wikipedia.org/wiki/Analog_computer,Analyseur <br />     https://en.wikipedia.org/wiki/Differential_analyser |
| DPMC Genève        | Article un peu plus scientifiquement poussé, abordable mais comportant des notions non vues en classes (dont des ALI).                                                                | PDF: https://aulysv.vercel.app/_app/immutable/assets/dpmc.D6hnSB0g.pdf                                                 |
| Univ. d'Algarve    | Document comportant une partie mathématique plus poussée sur le sujet, mais semble plus complexe et moins général : étudie particulièrement le General Purpose Analog Computer (GPAC) | PDF: https://aulysv.vercel.app/_app/immutable/assets/bazar.CKnQayjT.pdf                                                |
| Univ. of Tennessee | Article très vaste et général sur l'informatique analogique, fait intervenir des notions mathématiques abordables, mais ne développe pas tellement ce côté.                           | PDF: https://aulysv.vercel.app/_app/immutable/assets/utk.UV8GZNkB.pdf                                                  |

## Idées et apport personnel:

1. Concevoir un système physique **(trouver une problématique ici)** dont l'équation différentielle est connue et irrésolvable à la main : équation différentielle d'ordre 3 ou plus, non linéaire, ...
2. Créer un système électrique dont l'équation différentielle est la même que celle du système physique en identifiant les coefficients.
3. Mesurer la réponse du système électrique, et ainsi prévoir le comportement du système physique
4. Comparer le résultat prévu et le comportement réel du système physique et en déduire la pertinence du modèle électrique
5. Éventuellement résoudre de manière numérique l'équation pour avoir une meilleure précision liée aux erreurs.
