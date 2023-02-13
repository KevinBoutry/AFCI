<?php

require __DIR__."/../Model/userModel.php";
require "../ressources/service/_shouldBeLogged.php";

function connectUser(): void
{    
    require "../ressources/service/_reCaptcha.php";
    shouldBeLogged(false, "/05-mvc");
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
                       
            $user = getOneUserByEmail($email);
            if($user){
                if(password_verify($pass, $user["password"])){
                    $_SESSION["logged"] = true; 
                    $_SESSION["username"] = $user["username"];
                    $_SESSION["idUser"] = $user["idUser"];
                    $_SESSION["expire"] = time()+ (60*60);
                    header("location: /05-mvc/");
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
    require __DIR__."/../View/auth/connexion.php";
};

function disconnectUser(): void
{

    if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !== true)
    {
        header("Location: /");
        exit;
    }

    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID", "", time()-3600);

    header("Location: /05-mvc/auth/connect");
    exit;
}

?>