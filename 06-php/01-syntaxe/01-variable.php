<!-- Tout le code PHP se trouve entre les balises <?php ?> -->

<?php

// PHP signifie "PHP Hypertext Preprocessor"
// Originalement "Personnal Home Page"
# Les commentaires PHP peuvent s'écrire avec // ou # pour une seule ligne
/* Ou cela pour du multiligne*/
// Chaques instructions PHP se termine par un ";"

/* echo est la focntion d'affichage la plus utilisée et elle a la particularité de ne pas avoir besoin de parenthèses */
echo("Coucou");
echo "coucou", "Salut";

/* Print fonctionne comme echo mais légérement plus lente et retourne une valeur de 1; 
        Peu importe la fonction utilisée, une fois une valeur affichée, elle est traitée comme du HTML classique.    
*/
print "<br> PHP !";
/*
    var_dump(); sera votre meilleur ami, il affichera des informations supplémentaires sur les valeurs qui lui sont données.
    Très utile pour le débug.
*/

var_dump("Bonjour", "Le monde !");
/*
    var_export() affichera le contenu de ce qui lui a été donné, en tant que PHP utilisable.
*/
var_export("bidule");

#fonctions utiles pour le développement

// phpinfo() affiche tous les paramètres du serveur
// geteven() permet de récupérer une des variable d'environnement du serveur

echo getenv("SERVER_PORT");

# ---------------------------------------------------------------------------------------

echo "<h1> Déclaration des variables </h1> <hr>";
/*
    On déclare une variable avec un $ suivi d'une lettre ou un _ puis ensuite les chiffres sont aussi accepté<s class="
    Tenter d'appeler une variable avant sa déclaration provoque une erreur.
*/

// echo $banane;
$banane;
$banane = "jaune";
/*
    PHP gère aussi les constantes, elles sont déclarées différemment avant ou après la 8.0;
    (avant la 8.0, on pouvait ajouter un 3eme argument à define pour dire qu'elle n'est pas sensible à la casse)
*/
// Ancienne version :
define("AVOCAT","vert");
echo "avocat:", AVOCAT, "<br>";

// Nouvelle version :
const TOMATE = "rouge";
echo "tomate:", TOMATE, "<br>";

/*
    get_defined_vars() permet de récupérer un tableau des différentes variables définies, certains sont présentes pas défaut.
    get-defined_constants fait de même avec les constantes.
    Et on trouvera d'autres variantes
*/
var_dump(get_defined_vars());
echo "<br>";

// variables dynamiques.

$chaussette = "rouge";
$$chaussette = "bleu";

/*
    Le nom de mes variables sont créées dépendament de la valeur de la variable précédente.
*/
echo $chaussette, $rouge;

// On utilisera unset pour supprimer une variable;
unset($banane);
var_dump(get_defined_vars());

#--------------------------------------------------------
echo "<h1> Type des variables </h1><hr>";

$num = 5;
$dec = 0.5;
$str = "coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj= (object)[];

// integer est un nombre entier
echo gettype($num), "<br>";
// double est un nombre décimal
echo gettype($dec), "<br>";
// string est une chaine de caractère
echo gettype($str), "<br>";
// array est un tableau
echo gettype($arr), "<br>";
// boolean accepte uniquement true ou false
echo gettype($boo), "<br>";
// NULL qui n'a aucune valeur
echo gettype($nul), "<br>";
// objet pour la POO;
echo gettype($obj), "<br>";

#--------------------------------------------------------
echo "<h1> String </h1><hr>";

#--------------------------------------------------------
echo "<h1> Nombres </h1><hr>";

#--------------------------------------------------------
echo "<h1> Tableaux </h1><hr>";

#--------------------------------------------------------
echo "<h1> Booleans</h1><hr>";

#--------------------------------------------------------
echo "<h1> Les variables SUPERGLOBALs </h1><hr>";

?>