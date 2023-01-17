<?php
$title = "Session page 2";
require "../ressources/template/_header.php";
/*
    Si on abesoi nde la session que sur de rares pages, autant ne l'activer que sur les pages ou on a besoin.
    Mais si la majorité de notre site l'utilise, autant mettre le sessiosn start dans un ficheir inclus partout.

    On peut avoir un message d'information si on tente de start une session deja existante
    Si on souhaite l'eviter , on peut utiliser une des constantes suivantes dans une condition :
        PHP_SESSION_NONE (pas de session)
        PHP_SESSION_DISABLED (sessions desactivées)
        PHP_SESSION_ACTIVE (il y a une session démarrée)

    par défauit le cookie meurt quand on ferme le navigateur.
    Mais on peut lui donner une durée de vie plus longue en option du sessions start.
*/

session_start([
    "cookie_lifetime"=>300 // La durée est en secondes
]);
if(session_status() === PHP_SESSION_NONE)
    session_start();
/*
    ATTENTION ! : La durée de vie des cookies n'est pas très précise.
    Le navigateru fait regulierement un nettoyage des cookies, vérifiant à ce moment si leur durée de vie est dépassée ou non.

    une solution pour avoir une session plus précise, est de stocker la durée de bien en session lors de la cr"ation et si celle ci est dépassée, supprimer manuellement le cookie
*/
echo $_SESSION["username"]["nom"]. " "
    .$_SESSION["username"]["prenom"] . " aime la "
    .$_SESSION["food"] . " et a "
    .$_SESSION["age"]. "ans <br>";
?>
<a href="./07-a-session.php">Page 1</a>
<?php require "../ressources/template/_footer.php"; ?>