<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER monnaie"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="total EST_DU_TYPE NOMBRE" code="1#NOMBRE#total"/>
        <item algoitem="prix EST_DU_TYPE NOMBRE" code="1#NOMBRE#prix"/>
        <item algoitem="paie EST_DU_TYPE NOMBRE" code="1#NOMBRE#paie"/>
        <item algoitem="monnaie EST_DU_TYPE NOMBRE" code="1#NOMBRE#monnaie"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE prix" code="2#prix#pasliste"/>
        <item algoitem="TANT_QUE (prix != 0) FAIRE" code="15#prix != 0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="total PREND_LA_VALEUR total + prix" code="5#total#total + prix#pasliste"/>
            <item algoitem="LIRE prix" code="2#prix#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Le total à régler est de : &quot;" code="4#Le total à régler est de : #0"/>
        <item algoitem="AFFICHER total" code="3#total#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Argent donné par le client : &quot;" code="4#Argent donné par le client : #0"/>
        <item algoitem="LIRE paie" code="2#paie#pasliste"/>
        <item algoitem="monnaie PREND_LA_VALEUR paie - total" code="5#monnaie#paie - total#pasliste"/>
        <item algoitem="AFFICHER &quot;Monnaie rendue : &quot;" code="4#Monnaie rendue : #0"/>
        <item algoitem="AFFICHER monnaie" code="3#monnaie#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
