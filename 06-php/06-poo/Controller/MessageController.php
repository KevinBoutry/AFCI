<?php

use Model\MessageModel;
use Model\CategorieModel;
use Classes\AbstractController;
use Classes\Interface\CrudInterface;

require __DIR__."/../../ressources/service/_shouldBeLogged.php";
require __DIR__."/../../ressources/service/_csrf.php";

class MessageController extends AbstractController implements CrudInterface
{
    use \Classes\Trait\Debug;
    private MessageModel $db;
    private CategorieModel $db2;
    
    function __construct()
    {
        $this->db = new MessageModel();
        $this->db2 = new CategorieModel();
    }

    function create()
    {
        shouldBeLogged(true, "/06-poo/login");

        if($_SERVER['REQUEST_METHOD']=='POST')
        {
            if(empty($_POST["message"]))
                $_SESSION["flash"] = "Veuillez entrer un message";
            else
            {
                $message = cleanData($_POST["message"]);
                
                if(empty($_POST["categorie"]))
                {
                    addMessage([
                        "m"=>$message, 
                        "id"=>(int)$_SESSION["idUser"]
                    ]);
                    $_SESSION["flash"]= "Message Envoyé";
                }
                else
                {
                    $cat = $this->db2->getCategoryById((int)$_POST["categorie"]);
                    if($cat)
                    {
                        addMessage([
                            "m"=>$message, 
                            "id"=>(int)$_SESSION["idUser"],
                            "cat"=>$cat["idCat"]
                        ]);
                        $_SESSION["flash"]= "Message Envoyé";
                    }
                    else
                        $_SESSION["flash"]= "Cette catégorie n'existe pas.";
                }
            }
        }  
        goToList();
    }

    function read()
    {

        
        $messages = $flash = "";
        if(isset($_GET['id']))
        {
            $id = (int)$_GET["id"];
            if(empty($_GET["cat"]))
            {
                $messages = $this->db->getMessageByUser($id);
            }
            else
            {
                $messages = $this->db->getMessageByUserAndCategory($id, (int)$_GET["cat"]);
            }
        }
        else
        {
            header("Location: /06-poo");
            exit;
        }
        $logged = isset($_SESSION["idUser"]) && $_SESSION["idUser"] == $_GET["id"];
        if(isset($_SESSION["flash"]))
        {
            $flash = $_SESSION["flash"];
            unset($_SESSION["flash"]);
        }

        $categories = $this->db2->getAllCategories();

        $this->render("message/read",[            
            "title"=> "POO - Liste des messages",
        ]);
    }

    function update()
    {

    }

    function delete()
    {

    }
}

?>