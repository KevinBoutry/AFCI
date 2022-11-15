<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot; : &quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="multi EST_DU_TYPE NOMBRE" code="1#NOMBRE#multi"/>
        <item algoitem="result EST_DU_TYPE NOMBRE" code="1#NOMBRE#result"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
        <item algoitem="AFFICHER &quot;Table de &quot;" code="4#Table de #0"/>
        <item algoitem="AFFICHER chiffre" code="3#chiffre#0#pasliste"/>
        <item algoitem="AFFICHER &quot; : &quot;" code="4# : #1"/>
        <item algoitem="POUR multi ALLANT_DE 1 A 10" code="12#multi#1#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER chiffre" code="3#chiffre#0#pasliste"/>
            <item algoitem="AFFICHER &quot; X &quot;" code="4# X #0"/>
            <item algoitem="AFFICHER multi" code="3#multi#0#pasliste"/>
            <item algoitem="AFFICHER &quot; = &quot;" code="4# = #0"/>
            <item algoitem="result PREND_LA_VALEUR chiffre*multi" code="5#result#chiffre*multi#pasliste"/>
            <item algoitem="AFFICHER result" code="3#result#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
