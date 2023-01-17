<?php 

/*
    Include et require permettent d'inclure d'autres fichiers dans notre code.

    Nous avons créé plusieurs fichiers commençant par un "_" C'est juste une convention de nommage pour indiquer que ce sont des fichiers à inclure, ils ne doivent pas être ouvert seul.

    require et include peuvent ou non prendre des parenthèses.
*/
$title = "Include et Require";
$mainClass = "includeNav";
/*
    Les variables déclarées avant un include sont utilisables dans le fichier inclus.
*/
require "../ressources/template/_header.php";
/*
    Principale différence entre require et include :
        require en cas d'erreur provoque uen fatal error et met fin à votre code.
        include provoque un warning et continue votre code.
*/
include "../ressources/template/_nav.php";

?>
<div>
    <p id="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam aut laborum quas voluptates modi rerum? Amet, possimus iusto quos, distinctio voluptates culpa reprehenderit ex atque deleniti facere, voluptatem blanditiis!</p>
    <p id="para2">Alias, voluptate! Nulla ipsa illo nostrum voluptatibus architecto quasi, pariatur, sit veritatis, minima exercitationem corrupti dolor enim unde distinctio quaerat tenetur. Officia libero praesentium non obcaecati, et qui molestias deleniti!</p>
    <p id="para3">Id ducimus totam, iusto cumque eaque quidem mollitia, quasi debitis veniam dicta sint reprehenderit quas eveniet, voluptatum nostrum vero deserunt. Laudantium dolor quod mollitia ad necessitatibus obcaecati error consequatur quaerat!</p>
    <p id="para4">Voluptate repudiandae aperiam atque at cumque harum illo voluptatibus veniam, corrupti quaerat omnis voluptatem in hic? Molestias eius quas, unde quo voluptates dignissimos sed, nisi dolorem nesciunt, harum voluptatum repudiandae.</p>
    <p id="para5">Dolore ipsa ullam veniam omnis natus, explicabo accusantium commodi ab asperiores, a provident voluptas quidem velit quibusdam non ut impedit eos et? Eveniet omnis harum earum, est incidunt consectetur blanditiis.</p>
</div>

<?php
    /*
        Dans le cas d'une application complexe avec plusieurs inclusions, les chemins relatifs peuvent ne plus être bon.
        Pour éviter cela, on peut utiliser la constante "__DIR__". Cette constante donne le chemin absolu du fichier dans lequel elle est appelée.
        Elle ne termine pas par un "/" donc pensez à commencer votre chemin par un "/"
    */
    echo __DIR__."/../ressources/template/_footer.php";
    require __DIR__."/../ressources/template/_footer.php";
    /*
        include_once et require_once sont un plus lent car ils vérifient avant d'inclure si l'élément n'a pas déjà été inclus.
    */
    require_once "../ressources/template/_footer.php";
?>