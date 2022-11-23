"use strict";

// Asynchronus JavaScript And Xml (AJAX)
// Cela se résume en le fait d'envoyer des requêtes au serveur via Javascript

// Chemin vers mon fichier :
const url = "./hero.json"

/*
    On va voir 2 façons de gérer les requêtes.
    La plus vieille : XMLHttpRequest
    et la plus moderne : fetch
*/

// On crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// On donne à notre objet, un écouteur d'événement qui sera lancé à chaque changement d'état de notre requête.
xmlhttp.onreadystatechange = handleRequest;
function handleRequest()
{
    // console.log(xmlhttp.readyState, xmlhttp.status);
    /*
        readystate indique à quel moment de la requête on se trouve (4 étant la dernière étape)
        status indique le status de la requête :
        1XX indique un simple information.
        2XX tout s'est bien passé.
        3XX il y a eu une redirection.
        4XX erreur côté client.
        5XX erreur côté serveur.
    */
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        let success, data;
        /*
            Try catch permet de placer une partie ou tout notre code dans les accolades du try. si une erreur est provoquée dans notre code, elle sera capturée et non affichée ce qui ne bloquera pas notre script.
            Si une erreur est provoquée, alors elle sera capturée dans l'argument de catch, et alors ce qui se trouve dans les accolades de catch sera effectué.

            On peut ainsi créer un script qui ne plante pasz en cas d'erreur et avoir des erreurs personnalisées.

            Il existe aussi "finally{}" qui sera effectué une fois try catch terminé, qu'il y ai eu erreur ou non

            *try catch n'est pas lié aux requêtes AJAX et peut être utilisé n'importe où.
        */
        try
        {
            data = JSON.parse(xmlhttp.responseText);
            success = true;
        }catch(e)
        {
            console.log(e.message + " DANS --> " +xmlhttp.responseText);
            success = false;
        }
        // finally
        // {
        //     console.log("coucou");
        // }
        if(success)
        {
            // console.log(data);
            document.body.innerHTML = `<h1>${data.squadName}</h1>`;
        }
    }
}
/*
    On ouvre la requête
        en 1er argument, on lui donne la méthode sous forme de string.
        en 2nd on lui donne l'url à laquelle on souhaite faire une requête.
        en 3eme on lui indique si la requête doit être asynchrone ou non.
            *de façon synchrone, le script pourra bloquer jusqu'à obtenir le résultat de la requête.
            *de façon asynchrone, le script continuera sans attendre le résultat de la requête qui se fera en parallèle.
*/
xmlhttp.open("GET", url, true);
// On envoie la requête
xmlhttp.send();

// ---------------------------------------------- fetch -----------------------------------------------

/*
    fetch est toujours en asynchrone et par défaut utilise la méthode "GET", donc on peut se contenter de lui donner l'url.
    Ensuite on utilisera la méthode .then() que prendra une fonction callback qui sera lancée une fois la requête terminée.
*/
fetch(url).then(handleFetch);

function handleFetch(responseText)
{
    // console.log(responseText);
    if(responseText.ok)
    {
        /*
            sur la réponse donné par le fetch, je peux utiliser la méthode "json()" pour traiter les données json comme le ferait "JSON.parse()" si ce n'est que le résultat du traitement sera envoyé dans le .then() suivant si tout s'est bien passé, ou dans le .catch() si il y a une erreur.
        */
        responseText.json()
            .then(showResult)
            .catch(error=>console.log(error))
    }
    else
    {
        console.log(responseText.status, responseText.statusText);
    }
}

function showResult(data)
{
    // console.log(data);
    document.body.innerHTML += `<h2>${data.homeTown}</h2>`;
}