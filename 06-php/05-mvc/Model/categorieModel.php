<?php

require_once __DIR__."/../../ressources/service/_pdo.php";

/**
 * Récupére la liste des catégories existantes
 *
 * @return array
 */
function getCategories(): array
{
    $pdo = connexionPDO();
    $sql = $pdo->query("SELECT * FROM categorie ORDER BY nom ASC");
    return $sql->fetchAll();
}

?>