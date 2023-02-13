<?php
/*
    Nous allons créer notre propre routeur PHP mais en situation professionel, cela ne sert à rien de réinventer la roue.
    Il y a des tas de routeur déjà prêt à l'usage sur internet.
*/
# inclure les routes.
require ("./routes.php");
// On peut récupérer l'URL entrée par l'utilisateur via la superGlobal $_SERVER :
// $_SERVER["REQUEST_UTI"]

$url = filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL);

# Je découpe mon url en tableau et ne récupère que la première partie.
$url = explode("?",$url)[0];

#Je retire les possibles "/" avant et après mon url
$url = trim($url, "/");

if(array_key_exists($url, ROUTES))
    require "pages/".ROUTES[$url];
else
    require "pages/404.php";
?>