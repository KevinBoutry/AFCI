<?php
/*
    je défini les routes de mon site avec en clef, les routes visibles par l'utilisateur et en valeur.
*/

require "../ressources/service/router.php";


any('home','pages/home.php');
any('p2','pages/page2.php');
any('/404','pages/404.php');


const ROUTES = [
    "04-router"=>"home.php",
    "04-router/p2"=>"page2.php"
];
?>