<?php

require "../ressources/service/_pdo.php";


// Je détermine mon point de départ pour le limit SQL
$page = $_GET['page']??1;
$start = (($page-1)*4);

$pdo = connexionPDO();
$stmt = $pdo->prepare("SELECT * FROM users LIMIT :limit, 4");
$stmt->execute([':limit'=>$start]);

$users = $stmt->fetchAll();

// Je recupere le nombre de users
$userscount = $stmt->rowCount();
echo"<p>$userscount users </p>";

// Je determine le nombre de pages pour mon affichage
$nbPages = ceil($userscount/3);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        section{
            display: flex;
        }
        section p{
            padding: 1em;
        }
        footer{
            display: flex;
        }
        footer p{
            margin: 1em;
        }

    </style>
</head>
<body>
    <main>
        <section>
            <p>username</p>
            <p>email</p>
            <p>date de création</p>
        </section>
        <?php
            foreach($users as $index=>$user){
                echo'
                <section>
                    <p>'.$user['username'].'</p>
                    <p>'.$user['email'].'</p>
                    <p>'.$user['createdAt'].'</p>
                </section>';
                }
        ?>
    </main>
    <footer>
            <?php
            
            //precedent
            if ((int)$page === 1) {
                echo '<p><a href="?page=1">Précédent</a></p>';
            } else {
                echo '<p><a href="?page=' . $page - 1 . '">Précédent</a></p>';
            }
            // Pagination
            for($i = 1;$i <= $nbPages; $i++)
            {
                echo'<p><a href="?page='.$i.'">'.$i.'</a></p>';
            }
              //suivant
              if ((float)$page === $nbPages) {
                echo '<p><a href="?page='.$nbPages.'">Suivant</a></p>';
            } else {
                echo '<p><a href="?page=' . $page + 1 . '" >Suivant</a></p>';
            }
            ?>
    </footer>
    
</body>
</html>