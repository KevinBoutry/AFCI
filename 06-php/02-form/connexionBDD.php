<?php
require "../ressources/service/_shouldBeLogged.php";
require "../ressources/service/_reCaptcha.php";
shouldBeLogged(false, "../02-read.php");
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
                header("location: ../02-read.php");
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
?>

<form action="" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <br>
    <span class="error"><?php echo $error["email"]??""; ?></span>
    <br>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">
    <br>
    <span class="error"><?php echo $error["pass"]??""; ?></span>
    <br>

    <div class="g-recaptcha mb-3" data-sitekey="6Lc-1GYkAAAAAMXvnSMhSSi334-75ytIv_jGnGRX"></div>

    <input type="submit" value="Connexion" name="login">
    <br>
    <span class="error"><?php echo $error["login"]??""; ?></span>
</form>
<?php
require("../ressources/template/_footer.php");
?>