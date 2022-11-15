<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER haut"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="numero EST_DU_TYPE NOMBRE" code="1#NOMBRE#numero"/>
        <item algoitem="haut EST_DU_TYPE NOMBRE" code="1#NOMBRE#haut"/>
        <item algoitem="truc EST_DU_TYPE NOMBRE" code="1#NOMBRE#truc"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR numero ALLANT_DE 1 A 20" code="12#numero#1#20">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Entrez le nombre numéro &quot;" code="4#Entrez le nombre numéro #0"/>
            <item algoitem="AFFICHER numero" code="3#numero#0#pasliste"/>
            <item algoitem="AFFICHER &quot; : &quot;" code="4# : #0"/>
            <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
            <item algoitem="SI (chiffre > haut) ALORS" code="6#chiffre > haut">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="haut PREND_LA_VALEUR chiffre" code="5#haut#chiffre#pasliste"/>
                <item algoitem="truc PREND_LA_VALEUR numero" code="5#truc#numero#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le plus grand de ces nombres est : &quot;" code="4#Le plus grand de ces nombres est : #0"/>
        <item algoitem="AFFICHER haut" code="3#haut#1#pasliste"/>
        <item algoitem="AFFICHER &quot;C'etait le nombre numéro : &quot;" code="4#C'etait le nombre numéro : #0"/>
        <item algoitem="AFFICHER truc" code="3#truc#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
