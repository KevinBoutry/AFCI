<?php 
session_start();
if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !== true)
{
    header("Location: /");
    exit;
}
unset($_SESSION);
session_destroy();
setcookie("PHPSESSID", "", time()-3600);

header("Location: ./login.php");
exit;
?>