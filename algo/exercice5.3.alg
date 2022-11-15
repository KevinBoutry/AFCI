<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE chiffre"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="increm EST_DU_TYPE NOMBRE" code="1#NOMBRE#increm"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
        <item algoitem="POUR increm ALLANT_DE 1 A 10" code="12#increm#1#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="chiffre PREND_LA_VALEUR chiffre+1" code="5#chiffre#chiffre+1#pasliste"/>
            <item algoitem="AFFICHER chiffre" code="3#chiffre#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
