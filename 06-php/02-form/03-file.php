<?php

/*
    Ici nous allons voir l'upload de fichier.
    Même si on ne touchera pas à la BDD ici, il est important de savoir que en BDD, nous ne sauvegardons que le nom du fichier.
    Le fichier en lui même est sauvegardé sur notre serveur, comme tout fichier déjà présent.
*/

$error = $targer_file = $target_name = $mime_type = $oldName = "";

/*
    $target_dir contient le chemin vers le dossier ou l'on rangera nos fichiers.
    Pour des raisons de sécurités, si ce sont des fichiers accessibles par les utilisateurs(exemple photo de profil).
    Il vaudra mieux ranger vos fichiers téléversés dans un dossier "public" loin du fonctionnement de votre site.
    Le chemin vers vos fichiers étant visible.
*/

$target_dir = "./upload/";
$typePermis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];
if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['upload']))
{
    
    $oldName = basename($_FILES["superFichier"]["name"]);
    /*
        Un problème avec l'upload de fichier, c'est la possibilité que 2 fichiers portent le même nom.
        ON aura donc la possibilité de renommer le fichier.

        Ici, j'utilise "uniqid()" pour générer un string aléatoire à concaténer au nom du fichier.
        Par défaut il gén,ére 13 caraccctères, mais si son second paramètre est à true, il passe alors à 23.
        Son 1er paramètre permet d'y ajouter un prefix.
    */
    $target_name = uniqid("", true)."-".$oldName;
    // var_dump($target_name);
    /*
        Je concatene le chemin vers le dossier "upload" au nom du fichier.

        Je ne le fais pas ici mais je pourrai créer des dossiers par mois ou par utilisateur.
        Pour cela j'utiliserai "is_dir()" pour vérifier si le dossier existe déjà.
        et "mkdir()" pour créer un nouveau dossier
    */
    $target_file = $target_dir . $target_name;

    /*
        J'utilise "mime_content_type" pour aller vérifier le contenu de mon fichier dans sa zone temporaire, puis en déduire le type mime.
        Cela est plus sécurisé que de juste vérifier l'extension, qui peut être facilement changée.
    */

    $mime_type = mime_content_type($_FILES["superFichier"]["tmp_name"]);
    /*
        Bien qu'inutile vu le surnom que j'ai donné à mon fichier plus tot, je vérifie si j'ai déjà un fichier du même nom dans le dossier upload.
    */
    if(file_exists($target_file))
        $error = "Ce fichier existe déjà";

    /*
        Je fvérifie la taille de mon fichier,
        il ne faudrait pas que l'utilisateur téléverse des ficheirs de plusieurs giga.
        La taille est donnée en "octet" donc vous pouvez voir assez grand.

        Rappel que la taille maximum d'upload ainsi que de données envoyées en POST ont un paramètre modifiable dans le fichier php.ini.
    */

    if($_FILES["superFichier"]["size"] > 5000000)
        $error = "Ce fichier est trop gros.";

    /*
        On véirife si le type mime du fichier est dans notre tableau de type mime accepté.
    */

    if(!in_array($mime_type, $typePermis))
        $error = "Ce type de fichier n'est pas accepté";

    // Si on a aucune erreur
    if(empty($error))
    {

        /*
            "move_uploade_file" va déplacer un fichier depuis sa zone temporaire vers son emplacement définitf.
            Elle retournera un boolean indiquant si le déplacement s'est bien passé.
            Ici placé directement dans un if pour ajuster la suite selon si le fichier a bien été déplacé.

        */
        if(move_uploaded_file($_FILES["superFichier"]["tmp_name"],
        $target_file))
        {
            // Si tout s'est bien passé on pourra sauvegarder le nom en BDD.

        }
        else
            $error = "Erreur lors de l'upload.";
    }

}
$title = "Upload de fichier";
require "../ressources/template/_header.php";
?>

<form action="" method="post" enctype="multipart/form-data">
    <label for="fichier">Choisir un fichier :</label>
    <input type="file" name="superFichier" id="fichier">

    <input type="submit" value="Envoyer" name="upload">
    <span class="error"><?php echo $error??"" ?></span>
</form>

<?php if(isset($POST["upload"]) && empty($error)): ?>
    <p>
        Votre fichier a été téléversé sous le nom "<?php echo $target_name ?>" <br>
        Vous pouvez le télécharger <br>
        <a 
            href="<?php echo $target_file ?>" 
            download="<?php echo $oldName ?>">
            ICI
        </a>
    </p>

<?php
endif;
require "../ressources/template/_footer.php"
?>