<?php

require __DIR__."/../Model/messageModel.php";
require __DIR__."/../Model/categorieModel.php";
require __DIR__."/../../ressources/service/_shouldBeLogged.php";
require __DIR__."/../../ressources/service/_csrf.php";


/**
 * Gére la liste des messages et catégories
 *
 * @return void
 */
function readMessage() : void
{
    shouldBeLogged(true, "/05-mvc");
    $messages = getMessageByUserID();
    $categories = getCategories();
    if(isset($_SESSION["flash"]))
    {
        $flash = $_SESSION["flash"];
        unset($_SESSION["flash"]);
    }
    require __DIR__."/../View/message/read.php";    
};

function addMessage(): void
{
    $message = cleanData($_POST["message"]);
    addMessage($message);
}

?>
