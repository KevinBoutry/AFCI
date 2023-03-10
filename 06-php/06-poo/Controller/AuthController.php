<?php

use Model\UserModel;
use Classes\AbstractController;

class AuthController extends AbstractController
{

    use \Classes\Trait\Debug;
    private UserModel $db;

    function __construct()
    {
        $this->db = new UserModel();
    }

    function login()
    {        
        require __DIR__."../../../ressources/service/_shouldBeLogged.php";
        require __DIR__."../../../ressources/service/_reCaptcha.php";
        shouldBeLogged(false, "/06-poo");
        $email = $pass = "";
        $error = [];
        $recaptchaCode = $_POST['g-recaptcha-response'] ?? null;

        if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])){
            if(empty($_POST["email"])){
                $error["email"] = "Veuillez entrer un email.";
            }else{
                $email = trim($_POST["email"]);
            }
            if(empty($_POST["password"])){
                $error["pass"] = "Veuillez entrer un mot de passe.";
            }else{
                $pass = trim($_POST["password"]);
            }
            if(empty($error) && !is_null($recaptchaCode) && verifyReCaptcha($recaptchaCode) === true){
                        
                $user = $this->db->getOneUserByEmail($email);
                var_dump($user);
                if($user){
                    if(password_verify($pass, $user["password"])){
                        $_SESSION["logged"] = true; 
                        $_SESSION["username"] = $user["username"];
                        $_SESSION["idUser"] = $user["idUser"];
                        $_SESSION["expire"] = time()+ (60*60);
                        header("location: /06-poo/");
                        exit;
                    }
                    else{
                        $error["login"] = "Email ou Mot de passe incorrecte.";
                    }
                }
                else{
                    $error["login"] = "Email ou Mot de passe incorrecte.";
                }
            }
        }
        $this->render("auth/login.php",[
            "error"=>$error,
            "title"=> "POO - Login",
            "required"=>"required"
        ]);
    }

    function logout()
    {
        session_start();
        if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !== true)
        {
            header("Location: /");
            exit;
        }
        unset($_SESSION);
        session_destroy();
        setcookie("PHPSESSID", "", time()-3600);

        header("Location: ./login");
        exit;
    }
}

?>