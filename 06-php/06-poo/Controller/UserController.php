<?php

use Model\UserModel;
use Classes\AbstractController;
use Classes\Interface\CrudInterface;

require __DIR__."/../../ressources/service/_shouldBeLogged.php";
require __DIR__."/../../ressources/service/_csrf.php";

class UserController extends AbstractController implements CrudInterface
{
    use \Classes\Trait\Debug;
    private UserModel $db;
    private string $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

    function __construct()
    {
        $this->db = new UserModel();
    }

    function create():void
    {

        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['userForm']))

        // Traitement username :
        if(empty($_POST["username"]))
            $error["username"] = "Veuillez saisir un nom d'utilisateur";
        else
        {
            $username = cleanData($_POST["username"]);
            if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username))
                $error["username"] = "Veuillez saisir un nom d'utilisateur valide";
        }
        // Traitement email :
        if(empty($_POST["email"]))
            $error["email"] = "Veuillez saisir un email";
        else
        {
            $email = cleanData($_POST["email"]);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                $error["email"] = "Veuillez saisir un email valide";
            $resultat = $this->db->getOneUserByEmail($email);
            if($resultat)
                $error["email"] = "Cet email est déjà enregistré";
        }
        // Traitement password :
        if(empty($_POST["password"]))
            $error["password"] = "Veuillez saisir un mot de passe";
        else
        {
            $password = cleanData($_POST["password"]);
            if(!preg_match($this->regexPass, $password))
                $error["password"] = "Veuillez saisir un mot de passe valide";
            else
                $password = password_hash($password, PASSWORD_DEFAULT);
        }
        // Traitement confirmation password :
        if(empty($_POST["passwordBis"]))
            $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
        else
        {
            if($_POST["password"] != $_POST["passwordBis"])
                $error["passwordBis"] = "Veuillez saisir le même mot de passe";
        }
        // envoi des données:
        if(empty($error))
        {
            // je change la fonction en méthode
            $this->db->addUser($username, $email, $password);

            // J'ajoute un flash message
            $this->setFlash("Inscription bien prise en compte");
            header("Location: /06-poo");
            exit;
        }
        
        $this->render("user/inscription.php",[
            "error"=>$error,
            "title"=> "POO - Inscription",
            "required"=>"required"
        ]);
    }


    function read():void
    {
        $users = $this->db->getAllUsers();
        $this->render("user/list.php", [
            "users"=>$users,
            "title"=>"POO - liste Utilisateur"
        ]);
    }

    function update():void
    {
        shouldBeLogged(true, "/06-poo");

        if(empty($_GET["id"]) || $_SESSION["idUser"] != $_GET["id"])
        {
            header("Location: /06-poo");
            exit;
        }
    
        // Je récupère les informations lié à mon utilisateur.
        $user = $this->db->getOneUserById((int)$_GET["id"]);
    
        $username = $password = $email = "";
        $error = [];

    
        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['userForm']))
        {
            if(empty($_POST["username"]))
                $username = $user["username"];
            else
            {
                $username = cleanData($_POST["username"]);
                if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username))
                    $error["username"]= "Votre nom d'utilisateur ne peut contenir que des lettres";
            }
            if(empty($_POST["email"]))
                $email = $user["email"];
            else
            {
                $email = cleanData($_POST["email"]);
                if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                    $error["email"]= "Votre nom d'utilisateur ne peut contenir que des lettres";
            }
            if(empty($_POST["password"]))
                $password = $user["password"];
            else
            {
                $password = cleanData($_POST["password"]);
                if(empty($_POST["passwordBis"]))
                {
                    $error["passwordBis"] = "Veuillez confirmer votre mot de passe";
                }
                else if($_POST["password"] != $_POST["passwordBis"])
                {
                    $error["passwordBis"] = "Veuillez saisir le même mot de passe";
                }
                if(!preg_match($regexPass, $password))
                {
                    $error["password"] = "Veuillez saisir un mot de passe valide";
                }
                else
                    $password = password_hash($password, PASSWORD_DEFAULT);
            }
            if(empty($error))
            {
                $this->db->updateUserById($username, $email, $password, $user["idUser"]);
    
                // Ajout d'un Flash Message;
               $this->setFlash("Votre Profil a bien été édité.");
                // Je redirige mon utilisateur
                header("Location: /05-mvc");
                exit;
            }
        }
        $this->render("user/update.php",[
            "error"=>$error,
            "user"=>$user,
            "title"=> "POO - Mise à jour du profil",
        ]);
    }

    function delete():void
    {
        shouldBeLogged(true, "/05-mvc");

        if(empty($_GET["id"]) || $_SESSION["idUser"] != $_GET["id"])
        {
            header("Location: /05-mvc");
            exit;
        }

        $this->db->deleteUserById((int)$_GET["id"]);

        unset($_SESSION);
        session_destroy();
        setcookie("PHPSESSID","", time()-3600);

        header("refresh: 5;url = /06-poo");

        $this->render("user/delete.php",[
            "title"=>"POO - Suppression de compte"
        ]);
        
    }
}
?>