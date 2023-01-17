<?php
$title = "Go TO";
require "../ressources/template/_header.php";

/*
    Go TO permet de sauter une partie du code pour aller à la suivante.
    On peut s'en servir dans une condition pour ne pas executer certains codes.
    C'est une vieille fonctionnalité que les développeurs n'apprécient pas trop car elle change l'ordre de lecture du code.

    ! ATTENTIION :
        On ne peut pas entrer dans une fonction, une boucle ou une condition avec go to.
        On ne peut pas sortir d'une fonction non plus.

    Go To fonctionne en 2 parties, la 1ere est une balise qui servira d'encre à notre goto.
        Elle est représentée par un mot suivi de ":" puis le mot goto suivi du nom de l'ancre.
*/
for($i=0; $i <100000; $i++)
{
    echo "Ceci est le message $i <br>";
    if ($i === 5) goto fin;
}
echo "Les chaussettes bla bal blab olabla ...<br>";
fin:
echo "c'est la fin !"
?>

<?php require "../ressources/template/_footer.php" ?>