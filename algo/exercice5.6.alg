<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="result PREND_LA_VALEUR 1" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="entier EST_DU_TYPE NOMBRE" code="1#NOMBRE#entier"/>
        <item algoitem="result EST_DU_TYPE NOMBRE" code="1#NOMBRE#result"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
        <item algoitem="result PREND_LA_VALEUR 1" code="5#result#1#pasliste"/>
        <item algoitem="POUR entier ALLANT_DE 1 A chiffre" code="12#entier#1#chiffre">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="result PREND_LA_VALEUR result * entier" code="5#result#result * entier#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER result" code="3#result#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
