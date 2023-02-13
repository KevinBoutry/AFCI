<?php
/*
    Dans pHP il existe plusieurs outils de connexion à la BDD, "MySQLi" et "PDO"
    Ce 1er est adapté uniquement aux BDD de type MYSQL.
    Alors que le seconde gère tout.
*/

function connexionPDO() : \PDO
{
    $config = require __DIR__."/../config/_blogConfig.php";

/*
    "DSN" signifie "Data Source Name"
    C'est un string contenant toute les informatiosn pour localiser la BDD.
    Il prendra la forme suivante :
        "pilote":
        host="hôte de la BDD";
        port="port de la BDD";
        dbname="nom de la BDD";
        charset="charset utilisé par la BDD";
    Ici on obtient :
        "mysql:host=localhost;port=3306;dbname=blog;charset=utf8mb4"    
*/
    $dsn =
    "mysql:host=".$config["host"]
    .";dbname=".$config["database"]
    .";charser=".$config["charset"];

    try 
    {
    /*
        ON crée u nouvelle isntance de PDO en lui donnant :
            le dsn,
            le nom d'utilisateur,
            le mot de passe,
            les options de PDO
        Cet objet contient la connexion à la BDD
    */
        $pdo = new \PDO(
            $dsn,
            $config["user"],
            $config["password"],
            $config["options"]
        );
        return $pdo;
    } 
    catch (\PDOException $e)
    {
        /*
            On lance une nouvelle exception,
            avec en 1er argument le message d'erreur,
            et en 2nd le code d'erreur
        */
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
}
?>