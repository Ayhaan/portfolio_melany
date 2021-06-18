<?php
    require "connexion.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>
<body>
    <div><a href="search.php">Rechercher un travail</a></div>
    <h2>Les travaux</h2>
    <?php
        $artworks = $bdd->query("SELECT * FROM travaux");
        while($donArt = $artworks->fetch())
        {
           echo "<div><a href='artwork.php?id=".$donArt['id']."'>".$donArt['titre']."</a></div>";
        }
        $artworks->closeCursor();

    ?>
</body>
</html>