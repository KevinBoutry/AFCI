<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="TANT_QUE (restart == &quot;oui&quot;) FAIRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#victoire" algoitem="victoire EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#essai" algoitem="essai EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#tentative" algoitem="tentative EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#choix" algoitem="choix EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#restart" algoitem="restart EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#restart#&quot;oui&quot;#pasliste" algoitem="restart PREND_LA_VALEUR &quot;oui&quot;"/>
        <item code="15#restart == &quot;oui&quot;" algoitem="TANT_QUE (restart == &quot;oui&quot;) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#victoire#round(random()*100)#pasliste" algoitem="victoire PREND_LA_VALEUR round(random()*100)"/>
            <item code="4#En combien d'essai voulez vous essayer ? #1" algoitem="AFFICHER &quot;En combien d'essai voulez vous essayer ? &quot;"/>
            <item code="2#choix#pasliste" algoitem="LIRE choix"/>
            <item code="15#essai != victoire ET tentative &lt;= (choix - 1)" algoitem="TANT_QUE (essai != victoire ET tentative &lt;= (choix - 1)) FAIRE">
                <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
                <item code="4#Entrez un chiffre : #0" algoitem="AFFICHER &quot;Entrez un chiffre : &quot;"/>
                <item code="2#essai#pasliste" algoitem="LIRE essai"/>
                <item code="5#tentative#tentative + 1#pasliste" algoitem="tentative PREND_LA_VALEUR tentative + 1"/>
                <item code="6#essai > victoire" algoitem="SI (essai > victoire) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Plus petit !#1" algoitem="AFFICHER &quot;Plus petit !&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#essai &lt; victoire" algoitem="SI (essai &lt; victoire) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Plus grand !#1" algoitem="AFFICHER &quot;Plus grand !&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="4#VICTOIRE !#1" algoitem="AFFICHER &quot;VICTOIRE !&quot;"/>
                                <item code="4#Voulez vous recommencer (oui/non) ?#0" algoitem="AFFICHER &quot;Voulez vous recommencer (oui/non) ?&quot;"/>
                                <item code="2#restart#pasliste" algoitem="LIRE restart"/>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
            </item>
            <item code="6#essai != victoire" algoitem="SI (essai != victoire) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#DEFAITE !#0" algoitem="AFFICHER &quot;DEFAITE !&quot;"/>
                <item code="4#Voulez vous recommencer (oui/non) ?#0" algoitem="AFFICHER &quot;Voulez vous recommencer (oui/non) ?&quot;"/>
                <item code="2#restart#pasliste" algoitem="LIRE restart"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
