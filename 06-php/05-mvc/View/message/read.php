<?php

$title = "MVC - Read Message";
require __DIR__."/../../../ressources/template/_header.php";

$flash = $logged = "";

if($flash): ?>
    <div class="flash">
        <?php echo $flash ?>
    </div>
<?php endif; 

$logged = isset($_SESSION["idUser"]) && $_GET["id"]==$_SESSION["idUser"];
if($logged):
?>
<form action="./create.php" method="post">
    <textarea name="message" placeholder="Nouveau Message"></textarea>
    <select name="categorie">
        <option value="">Selection de catégorie</option>
        <?php foreach($categories as $cat): ?>
            <option value="<?php echo $cat["idCat"] ?>">
                <?php echo $cat["nom"] ?>
            </option>
        <?php endforeach; ?>
    </select>
    <input type="submit" value="Envoyer" name="addMessage">
</form>
<a href="?id=<?php echo $_GET["id"] ?>">
    Toutes les catégories.
</a>
<?php 
endif;

if($messages):
    foreach($messages as $m):
?>
<div class="message">
    <div class="date1"> 
        Ajouté le <?php echo $m["createdAt"] ?>
    </div>
    <div class="date2">
        <?php echo ($m["editedAt"]?"édité le : ".$m["editedAt"]: "") ?>
        </div>
    <p><?php echo $m["message"] ?></p>
    <div class="btns">

        <?php if(!empty($m["categorie"])): ?>
            <a href="?id=<?php echo $m["idUser"] ?>&cat=<?php echo $m["idCat"] ?>">
                <?php echo $m["categorie"] ?>
            </a>
        <?php endif; ?>

        <?php if($logged): ?>
            <a href="./update.php?id=<?php echo $m["idMessage"] ?>">éditer</a>
            <a href="./delete.php?id=<?php echo $m["idMessage"] ?>">supprimer</a>
        <?php endif; ?>
    </div>
</div>
<?php 
endforeach;
else: 
?>
    <p>Cet utilisateur n'a aucun message</p>
<?php 
endif;
require __DIR__."/../../../ressources/template/_footer.php";
?>