<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Le plus grand de ces nombres est : &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2" totalAffichages="1000" nbDecimales="8" epaisseurLigne="2" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="numero EST_DU_TYPE NOMBRE" code="1#NOMBRE#numero"/>
        <item algoitem="top EST_DU_TYPE NOMBRE" code="1#NOMBRE#top"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="top PREND_LA_VALEUR 1" code="5#top#1#pasliste"/>
        <item algoitem="AFFICHER top" code="3#top#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Le plus grand de ces nombres est : &quot;" code="4#Le plus grand de ces nombres est : #0"/>
        <item algoitem="AFFICHER top" code="3#top#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
