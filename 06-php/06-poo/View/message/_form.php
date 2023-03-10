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