<?php

require_once __DIR__."/../../ressources/service/_pdo.php";


/**
 * Récupérer tous les messages de l'user connecté en session
 *
 * @return void
 */
function getMessageByUserID(): array
{
    $pdo = connexionPDO();
    if(empty($_GET["cat"]))
    {
        $sql = $pdo->prepare("SELECT m.*, c.nom as categorie FROM message m LEFT JOIN categorie c ON m.idCat = c.idCat WHERE m.idUser = ? ORDER BY m.createdAt DESC");
        $sql->execute([(int)$_GET["id"]]);
    }
    else
    {
        $sql = $pdo->prepare("SELECT m.*, c.nom as categorie FROM message m LEFT JOIN categorie c ON m.idCat = c.idCat WHERE m.idUser = ? AND m.idCat = ? ORDER BY m.createdAt DESC");
        $sql->execute([
            (int)$_GET["id"],
            (int)$_GET["cat"]
    ]);
    }
    return $sql->fetchAll();
};

/**
 * Création d'un message
 *
 * @param string $message
 * @return void
 */
function addMessage(string $message): void
{
    $pdo = connexionPDO();
    if(empty($_POST["categorie"]))
    {
        $sql = $pdo->prepare("INSERT INTO message(message, idUser) VALUES (:m, :id)");
    }
    else
    {
        $sql = $pdo->prepare("SELECT * FROM categorie WHERE idCat = ?");
        $sql->execute([(int)$_POST["categorie"]]);
        $cat = $sql->fetch();
        if($cat)
        {
            $sql = $pdo->prepare("INSERT INTO message(message, idUser, idCat) VALUES (:m, :id, :cat)");
            $sql->bindValue("cat", $cat["idCat"]);
        }
        else
        {
            $_SESSION["flash"] = "Cette catégorie n'exite pas.";
        }
    }
    $sql->bindValue("m", $message);
    $sql->bindValue("id", (int)$_SESSION["idUser"], PDO::PARAM_INT);
    $sql->execute();
}
?>