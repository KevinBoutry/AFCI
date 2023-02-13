<?php 
/*
    Pour nous simplifier la gestion des mails, on utilise PHPMailer qui est un package populaire.

    On l'a installé avec Composer qui est l'équivalent la plus connu à NPM pour PHP.

    On indique lest namespaces qui vont être utilisés :
*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

/* 
    On require l'autoloader de composer pour qu'il require automatiquement les classes dont on va avoir besoin.
*/
require __DIR__. "/../vendor/autoload.php";

/**
 * Envoi un Email.
 *
 * @param string $from
 * @param string $to
 * @param string $subject
 * @param string $body
 * @return string
 */
function sendMail(string $from, string $to, string $subject, string $body): string
{
    /*
        ON crée un nouveal objet PHPMailer, l'argument à true activer les exceptions
    */
    $mail = new PHPMailer(true);
    try 
    {
        /*
            Paramètres du serveur de mail :
            Toutes les informations suivantes sont disponibles sur votre serveur de mail.

            On active l'utilisation de SMTP.
            (Simple Mail Transfer Protocol)
        */
        $mail->isSMTP();
        # On indique où est hébergé le serveur de mail.
        $mail->Host = "sandbox.smtp.mailtrap.io";
        # On active l'authentification par SMTP.
        $mail->SMTPAuth = true;
        #On indique quel port est utilisé.
        $mail->Port = 2525;
        #On indique l'username et le password
        $mail->Username = "ba14ea7acaa134";
        $mail->Password = "91f4611054ab8f";
        #Active les détails sur le déroulement de la requête.
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        # Quel type de chiffrement est utilisé our envoyer le mail.
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        /*
            Exspéditeur et Destinataire :
        */
        # setFrom prendra l'addresse de l'expéditeur. (et optionnellement un nom.)
        $mail->setFrom($from);
        # addAddress permet d'ajouter un destinataire (avec optionnellement un nom)
        $mail->addAddress($to);
        /*
            "addReplyTo" permet d'indiquer une réponse.
            "addCC" permet d'ajouter une adresse en copie.
            "addBCC" permet d'ajouter une adresse en copie cachée.

            "addAttachment" qui permet d'ajouter une pièce jointe.
        */
        $mail->isHTML(true);
        # Indique le sujet du mail.
        $mail->Subject = $subject;
        # Indique le corps du mail.
        $mail->Body = $body;
        /*
            On peut ajouter un "AltBody" dans le cas où le client mail du destinataire ne gère pas le HTML.

            On envoi l'email.
        */
        $mail->send();
        return "Message Envoyé";
    } 
    catch (Exception $e) 
    {
        // Si une erreur est produite, on ne l'affiche pas directement mais retourne le message d'erreur suivant.
        return "Le message n'a pas pu être envoyé. Mailer Error : {$mail->ErrorInfo}";
    }
    return "TODO: Cette fonction est vide !";
}
?>