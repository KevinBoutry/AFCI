<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="numero PREND_LA_VALEUR numero + 1"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#chiffre" algoitem="chiffre EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#numero" algoitem="numero EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#haut" algoitem="haut EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#truc" algoitem="truc EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#chiffre#0.1#pasliste" algoitem="chiffre PREND_LA_VALEUR 0.1"/>
        <item code="15#chiffre != 0" algoitem="TANT_QUE (chiffre != 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#numero#numero + 1#pasliste" algoitem="numero PREND_LA_VALEUR numero + 1"/>
            <item code="4#Entrez le nombre numéro #0" algoitem="AFFICHER &quot;Entrez le nombre numéro &quot;"/>
            <item code="3#numero#0#pasliste" algoitem="AFFICHER numero"/>
            <item code="4# : #0" algoitem="AFFICHER &quot; : &quot;"/>
            <item code="2#chiffre#pasliste" algoitem="LIRE chiffre"/>
            <item code="6#chiffre > haut" algoitem="SI (chiffre > haut) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#haut#chiffre#pasliste" algoitem="haut PREND_LA_VALEUR chiffre"/>
                <item code="5#truc#numero#pasliste" algoitem="truc PREND_LA_VALEUR numero"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Le plus grand de ces nombres est : #0" algoitem="AFFICHER &quot;Le plus grand de ces nombres est : &quot;"/>
        <item code="3#haut#1#pasliste" algoitem="AFFICHER haut"/>
        <item code="4#C'etait le nombre numéro : #0" algoitem="AFFICHER &quot;C'etait le nombre numéro : &quot;"/>
        <item code="3#truc#0#pasliste" algoitem="AFFICHER truc"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
