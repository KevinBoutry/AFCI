<?php

echo "<h1> Déclaration des fonctions </h1>";
/*
    Pour déclarer des fonctions en PHP, on utilisera le mot clef "function".
    suivi du nom de la fonction qui suis les même règles que les noms des variables.
    Ensuite des parenthèses pouvant accueilir les possibles arguments
    et enfin des accolades contenant le corps de la fonction.
*/

function salut()
{
    echo "Salut tout le monde ! <br>";
}

/*
    Pour appeler une foncion, on utilise son nom suivi de parenthèse.
    Le code d'une fonction n'est executé qu'une fois qu'elle est appelée.
*/

salut();
salut1();
function salut1()
{
    echo "Salut les autres ! <br>";
}

/*
    Si une fonction est déclarée dans un bloc(if par exemple), elle n'est appelable qu'après avori été déclaré.
*/

if(true)
{
    // salut2();
    function salut2()
    {
        echo "Salut moi même ! <br>";
    }
    salut2();
}

/*
    Appeler ce genre de fonction hors de son block peut poser problème si elle se retrouve non déclaré.
    Si la condition est false par exemple
*/

if(true) salut2();

/*
    Une fonction peut se contenter d'effectuer des action mais peut aussi retourner des informations.
    On utilisera pour cela le mot clef "return" suivi (ou non) des informations à retourner.
    le mot clef "return" met fin à la fonction, tout code qui suit ne sera pas effectué.
*/

function aleaString()
{
    $r = rand(0,100);
    // Si $r est plus petit que 50 on ne retourne rien.
    if($r<50)return;
    // Sinon on retourne le nombre sous forme de string.
    return (string)$r;
}

// On peut utiliser la valeur de retour directement dans une autre fonction :
echo aleaString(), "<br>";

// Ou alors l'attribuer à une variable :
$alea = aleaString();
echo $alea, "<br>";

#----------------------------------------
echo "<h2> ARGUMENTS </h2>";

/*
    Entre les parenthèses de la déclaration de fonction,
    Nous pouvons avoir entre 0 et l'infini arguments.
    Ces arguments sont séparés d"une virgule et nommé comme une variable.

    Quand on appelle une fonction avec un argument, la valeur donnée est transmise à la variable déclarée dans la fonction.
*/
function bonjour($nom)
{
    echo "Bonjour $nom <br>";
}
bonjour("Maurice");
// Si il manque des arguments, PHP lancera une fatal error.

function bonjour1($n1, $n2)
{
    echo "Bonjour $n1 et $n2 ! <br>";
}
bonjour1("Charly", "Pierre");

// Il est aussi possible d'avoir un nombre d'arguments infinis

function bonjour2(...$noms)
{
    // Dans ce cas là, tous les arguments sont palcés dans $noms sous forme de tableau.
    foreach($noms as $n) echo "Salut $n ! <br>";
}
bonjour2("Maurice", "Pierre", "Charli", "Julie");
/*
    Il est possible de donner une valeur par défaut à un argument.
    Dans ce cas là, l'arguement devient optionnel.
    Si l'argument est fourni, alors il utilisera la valeur fournie.
    Sinon il utilisera la valeur par défaut.
    Un arguement est optionnel que si les arguments suivants le sont aussi.
*/

function bonjour3($n1, $n2="personne d'autre")
{
    echo "Bonjour $n1 et $n2 ! <br>";
}
bonjour3("Julie");
bonjour3("Julie","Mauricette");
/*
    Quand on donne un arguement à une fonction, via une variable.
    Si l'arguement est modifié ca ne modifie pas la variable.
*/

function titre($nom)
{
    $nom .= " le grand";
    return $nom;
}
$mau = "Maurice";
$mau2 = titre($mau);

// $mau n'as pas changé bien que l'argumentr ait été modifié.
echo "$mau est devenur $mau2 ! <br>";

/*
    Par contre, il est possible de passer des arguements par "référence".
    Cela signifie que les modifications qui auront lieu sur l'argument, auront lieu aussi sur la variable.
    Ce n'est plus la valeur qui est transmise, mais la position de la variable dans la mémoire.
*/

function titre1(&$nom)
{
    $nom .= " le petit";
}
titre($mau);
echo "Voici $mau !";

echo "<h2> RECURCIVITE </h2>";

/*
    Une fonction s'appelant elle même, est dite récurcive.
    La 1ere chose à faire lorsque l'on crée ce genre de foncion, c'est de prévoir une condition de sortie sous peine d'avoir uen boucle infinie.
*/

function decompte($n)
{
    echo $n, "<br>"; // Action réalisée par la fonction
    if($n<=0)return; // Condition de la sortie de la boucle
    decompte(--$n); // la recurcivité
}
decompte(5);

# -----------------------------------------------------------
echo "<h2>Typage et Description</h2>";
/*
    Sur les dernières versions de PHP, il est possible voir conseillé bien que non obligatoire de typer ses arguments et valeur de retour. Ainsi que de décrire ses fonctions.

    Faire ceci ne va pas fondamentalement changer le fonctionnement de votre code, mais faciliter sa relecture, que ce soit par vous ou un collègue.
*/


/**
 * Cette fonction retourne la présentation du personnage
 *
 * Ces arguments représentes les information du personnage.
 * 
 * @param string $nom nom du personnage
 * @param integer $age age du personnage
 * @param boolean $travail travaille t-il ou non
 * @return string présentation du personnage
 */
function presentation(string $nom, int $age, bool $travail):string
{
    return "Je m'appelle $nom et j'ai $age ans. Je ".($travail?"travaille.":"ne travaille pas.");
}
echo presentation("Maurice", 54, false);

#-----------------------------------------------------

echo "<h2> Portées des variables et static</h2>";
// Une variable déclaré hors d'une fonction, n'est pas accessible dans celle ci;
$z = 5;
function showZ()
{
    // Ici $z est inconnu
    // echo $z
    /*
        On peut récupérer une variable global grace au mot clef "global"
        Mot clef que l'on fera suivre du nom des variables que l'on souhaite récupérer.
    */
global $z;
echo $z, "<br>";
}

showZ();
/*
    Dans un cas normal, une variable déclaré dans un fonction, est détruite un fois la fonction terminée.
    Le mot clef "static" permet de la sauvegarder et de ne pas la réinitialiser
*/

function compte()
{
    $a = 0;
    static $b = 0;
    echo "a : $a <br> b : $b <br>";
    $a++;
    $b++;
}

compte();
compte();
compte();

#-------------------------------------------------------------------
echo "<h2>Fonction anonyme, fléchée et callback</h2>";

/*
    Bien que plus rarement utilisée qu'en JS, il est possible d'utiliser des fonctiones anonyme et fléchée en PHP.
*/

function dump(array $arr, callable $func): void
{
    foreach($arr as $a)
    {
        $func($a);
        echo "<br>";
    }
}
/*
    Ici je donne un tableau à ma fonction suivi d'une fonction anonyme qui fera un echo
*/
$a2 = ["sadwich", "ramen", "pizza"];
dump($a2, function($x){echo $x;});
// la même chose avec un fonction fléché
dump($a2, fn($x)=>var_dump($x));

?>

