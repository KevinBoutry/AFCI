<?php
$title = "Formulaire en POST";
require "../ressources/template/_header.php";

/* 
    La principale différence entre GET et POST, est la façon dont sont transmises les données.
    En GET elles sont visibles dans l'URL, en POST elles sont transmises dans la requête de façon invisible.

    On utilisera généralement plutôt POST, surtout si on a des informations sensibles ou des fichiers à transmettre.
    Mais GET est souvent utiliser dans les formulaires de recherche pou rendre l'url de la recherche copiable.

    Au niveau du fichier les différences sont :
        1. l'attribut methode du formulaire est passé à "POST".
        2. ON vérifie si on arrive en méthode "POST" avant de traiter le formulaire.
        3. On récupère nos informations dans la superglobal "$_POST" et non "$_GET"

    Comme ce serait dommage d'arrêter le cours ici, on va améliorer notre formulaire :
        1. On va transformer nos tableaux de données en tableau associatif.
        2. Faire apparaître nos options et radios avec un boucle.
        3. Ajouter une classe "formError" à certains de nos balises.
        4. Ajouter une case à cocher pour valider le formulaire.
        5. Faire que les utilisateurs n'aient pas à remplir à nouveau les champs quand ils se trompent.
*/

// var_dump($_POST);

/* 
    Il est important de vérifier l'existence de notre donnée dans la variable $_POST.
    Si on arrive ici sans avoir validé le formulaire, des erreurs apparaîtrons si on tente d'utiliser
    les données du formulaire.
*/
if(isset($_POST["username"]))
{
    $username = $_POST["username"];
}
/*
    Optionnellement, on peut déclarer en début de fichier PHP, les différentes variables que l'on va utiliser.
    Cela permet de préciser ce qu'elles vont contenir et gérer la possibilité qu'elles soient utilisées sans passer par une condition suivante.
*/
# Une variable pour chaque entrée de mon formulaire.
$username = $food = $drink = "";
# Une variable pour mes erreurs.
$error = [];
# Les choix possibles pour l'utilisateur
$foodList = [
    "welsh" => "Welsh (car vive le fromage)",
    "cannelloni" => "Canellonni (car les raviolis c'est surfait)",
    "oyakodon" => "Oyakodon (car j'aime l'humour noir)"
    ];
$drinkList = [
    "jus de tomate" => "Jus de Tomate(je suis un vampire)",
    "milkshake" => "Milkshake(aux fruits de préférence)",
    "limonade" =>"Limonade (J'ai besoin de sucre)"
    ];

/*
    On trouvera dans la globale $_SERVER, la méthode utilisée pour arriver dans cette page.
    Par défaut, aller d'une page à l'autre, se fait en méthode POST
*/

var_dump($_SERVER["REQUEST_METHOD"]);
/*
    Pour commencer la vérification de mon formulaire, je vais vérifier 2 points.
    Si la méthode correspond à celle de mon formulaire, (Ici "POST") et si j'ai au moins un champ de ce formulaire (par exemple celui du bouton submit).
*/

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["meal"]))
{
    if(empty($_POST["username"]))
        $error["username"] = "Veuillez entrer un nom d'utilisateur.";
    else
    {
        $username = cleanData($_POST["username"]);
        if(strlen($username) < 3 || strlen($username) > 255)
            $error["username"] = "Votre nom d'utilisateur n'a pas une taille adapté.";
    }

    if(empty($_POST["food"]))
        $error["food"] = "Veuillez choisir un repas !";
    else
    {
        $food = cleanData($_POST["food"]);
        if(!in_array($food, $foodList))
            $error["food"] = "Ce repas n'existe pas !";
    }

    if(empty($_POST["drink"]))
    $error["drink"] = "Veuillez choisir une boisson !";
    else
    {
        $food = cleanData($_POST["drink"]);
        if(!in_array($drink, $drinkList))
            $error["drink"] = "Cette boisson n'existe pas !";
    }

    
    if(empty($_POST["cgu"]))
    $error["cgu"] = "Veuillez accepter nos conditions d'utilisation !";
    else
    {
        $cgu = $_POST["cgu"];
        if($cgu != "cgu")
            $error["cgu"] = "Ne modifiez pas notre formulaire !";
    }
}

function cleanData(string $data): string
{
    //  On se sert de trim pour supprimer les esapces accidentels.
    $data = trim($data);
    $dara = stripslashes($data);
    return htmlspecialchars($data);
}

?>

<form action="" method="POST">

    <input 
        type="text" 
        placeholder="Entrez un nom" 
        name="username"
        class="<?php echo (empty($error["username"])?"":"formError")?>"
        value="<?php echo $username ?>">
    <span class="error"><?php echo $error["username"]??""; ?></span>
    <br>

    <fieldset 
        class="<?php echo (empty($error["food"])?"":"formError")?>">
        <legend>
            Nourriture Favorite
        </legend>
        <?php foreach($foodList as $k => $f): ?>
        <input 
            type="radio" 
            name="food" 
            id="<?php echo $k ?>"
            value="<?php echo $k ?>"
            <?php echo $food===$k?"checked":"" ?>>
            
        <label for="<?php echo $k ?>"><?php echo $f ?></label>
        <br>
        <?php endforeach; ?>
        <span class="error"><?php echo $error["food"]??"" ?></span>
    </fieldset>

    <label for="boisson">Boisson Favorite</label>
    <select 
        name="drink" 
        id="boisson"
        class="<?php echo (empty($error["drink"])?"":"formError")?>">
            <?php foreach($drinkList as $k => $d):?>
                <option 
                    value="<?php echo $k ?>"
                    <?php echo $drink===$k?"selected":"" ?>>
                    <?php echo $d ?>
                </option>
            <?php endforeach; ?>
    </select>
    <span class="error"><?php echo $error["drink"]??"" ?></span>
    <br>


    <input type="checkbox" name="cgu" id="cgu" value="cgu">
    <label for="cgu">J'accepte que mes données ne m'appartiennent plus.</label>
    <span class="error"><?php echo $error["cgu"]??"" ?></span>
    <br>
    <input type="submit" value="Envoyer" name="meal">
</form>
    <!-- Si notre formulaire a été soumis et sans erreur, je vasi afficher la partie suivante : -->
    <?php if(empty($error) && isset($_POST["meal"])): ?>
    <h2>Super Repas !</h2>
    <!-- 
        On peut encapsuler du HTML dans une condition ou une boucle PHP.
        La fermeture de la balise PHP, ne met pas fin à la condition, Elle attend toujours qu'on réouvre PHP pour fermer la condition.
        Le HTML ci dessous s'affichera uniquement si la condition est true.    
    -->
    <p>
        <?php echo "Pour $username, le meilleur repas est un \"$food\" avec \"$drink\"." ?>
    </p>
<?php
endif;
require "../ressources/template/_footer.php";
?>