<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (&quot;nom1&quot; &lt; &quot;nom2&quot; ET &quot;nom2&quot; &lt;  &quot;nom3&quot;) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#nom1" algoitem="nom1 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom2" algoitem="nom2 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom3" algoitem="nom3 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#nom1#pasliste" algoitem="LIRE nom1"/>
        <item code="2#nom2#pasliste" algoitem="LIRE nom2"/>
        <item code="2#nom3#pasliste" algoitem="LIRE nom3"/>
        <item code="6#&quot;nom1&quot; &lt; &quot;nom2&quot; ET &quot;nom2&quot; &lt;  &quot;nom3&quot;" algoitem="SI (&quot;nom1&quot; &lt; &quot;nom2&quot; ET &quot;nom2&quot; &lt;  &quot;nom3&quot;) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#L'ordre est correct#1" algoitem="AFFICHER &quot;L'ordre est correct&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#L'ordre est incorrect#1" algoitem="AFFICHER &quot;L'ordre est incorrect&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
