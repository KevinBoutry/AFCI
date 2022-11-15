<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//On demande à l'utilisateur de rentrer un chiffre"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#chiffre" algoitem="chiffre EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="19#On demande à l'utilisateur de rentrer un chiffre" algoitem="//On demande à l'utilisateur de rentrer un chiffre"/>
        <item code="2#chiffre#pasliste" algoitem="LIRE chiffre"/>
        <item code="6#chiffre &lt; 5" algoitem="SI (chiffre &lt; 5) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Ce chiffre est inférieur à 5#0" algoitem="AFFICHER &quot;Ce chiffre est inférieur à 5&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#chiffre > 5" algoitem="SI (chiffre > 5) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Ce chiffre est supérieur à 5#0" algoitem="AFFICHER &quot;Ce chiffre est supérieur à 5&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="4#C'est le chiffre 5 bien ouej#0" algoitem="AFFICHER &quot;C'est le chiffre 5 bien ouej&quot;"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
