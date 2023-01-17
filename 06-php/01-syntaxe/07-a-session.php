<?php
$title = "Session Page 1";
require "../ressources/template/_header.php";
/*
    Les sessions permettent de stocker des données  pouvant être utilisées sur plusieurs pages.
    Le cas d'utilisation le plus classique, c'est le stockage d'information de connexion, permettant de garder un utilisateur connecté sur plusieurs pages d'un même site.

    Les informations sont stockées côté serveur, mais pour savoir quels informations appartiennent à quel utilisateur, le serveur envoi au navigateur de l'utilisateur un cookie indiquant l'ID de la session.
    
    Les cookies étant échangés entre le serveur et le navigateur à chaques requêtes, il est possible de vérifier automatiquement la session.

    les informations de sessions sont stockées dans la superglobal "$_SESSION" mais celle ci n'existe qu'à partir du moment ou la session est démarrée avec la fonction "session_start()"

    Le cookie verra par défaut l'identifiant de session stocké à la clef "PHPSESSID".
*/
session_start();
var_dump($_SESSION, $_COOKIE);
/*
    Pour stocker des informations en session, il suffit d'utiliser la super global $_SESSION qui est un tableau.
    On peut tout simplement ajouter des éléments à notre tableau.
*/

$_SESSION["food"] = "Pizza";
$_SESSION["age"] = 54;
$_SESSION["username"] = ["nom"=>"Dupont", "prenom"=>"Maurice"];
?>
 <a href="./07-b-session.php">Page 2</a>
<?php require "../ressources/template/_footer.php";