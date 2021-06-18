<?php 
    // verification, champs text vide ou pas
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
        // stockage du contenu des champs dans des variables
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        //verification du mail
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            //configuration du mail
            $destinataire ="ayhan@molengeek.com";
            $sujet='formulaire de contact';
            $msg ="Une nouvelle question est arrivée \n
            Nom : $name \n
            Email : $email \n
            Message : $message \n
            ";
            $entete ="From : $name \n Reply-To: $email";
            
            //methode de mail pour l'envoi 
            mail($destinataire, $sujet, $message, $entete);
        } else{
            echo 'Email no valide';
        };
    }else{
        echo "vous n'avez pas rempli tous les champs";
    }
?>
