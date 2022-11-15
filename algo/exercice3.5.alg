<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (chiffre1 * chiffre2 >=0) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#chiffre1" algoitem="chiffre1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#chiffre2" algoitem="chiffre2 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#chiffre1#pasliste" algoitem="LIRE chiffre1"/>
        <item code="2#chiffre2#pasliste" algoitem="LIRE chiffre2"/>
        <item code="6#chiffre1 * chiffre2 >=0" algoitem="SI (chiffre1 * chiffre2 >=0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Le produit est positif !#1" algoitem="AFFICHER &quot;Le produit est positif !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Le produit est négatif !#0" algoitem="AFFICHER &quot;Le produit est négatif !&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
