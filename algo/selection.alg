<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER rand[i]" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="rand EST_DU_TYPE LISTE" code="1#LISTE#rand"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 0 A 19" code="12#i#0#19">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="rand[i] PREND_LA_VALEUR round(random())*100" code="5#rand#round(random())*100#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="POUR i ALLANT_DE 0 A 19" code="12#i#0#19">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER rand[i]" code="3#rand#1#i"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
