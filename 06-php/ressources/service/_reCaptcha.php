<?php

// Fonction de vérification du cpatcha côté serveur
function verifyReCaptcha($recaptchaCode)
{
    // On crée un requête pour comparer la clé publique et privée
    $postdata = http_build_query(["secret" => "6Lc-1GYkAAAAAAMa4mCmsNRD2UG9Vu9Sa3rezfyT", "response" => $recaptchaCode]);
    $opts = [
        'http' =>
        [
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
        ]
    ];
    $context  = stream_context_create($opts);
    // On execute la requête
    $result = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
    // On récupére un résultat
    $check = json_decode($result);
    // ON fournit ce résultat au reste du code
    return $check->success;
}

// // Gestion des données POST
// $mail = $_POST['mail'] ?? null;
// $recaptchaCode = $_POST['g-recaptcha-response'] ?? null;

// // 1 : mail est valide
// if((!is_null($mail) && filter_var($mail, FILTER_VALIDATE_EMAIL))
//     // 2 : captcha est valide
//     && !is_null($recaptchaCode) && verifyReCaptcha($recaptchaCode) === true)
//     {
//         echo "votre formulaire a bien été validé";
//     }
// else
//     echo "Veuillez saisir une adresse email valide";

?>