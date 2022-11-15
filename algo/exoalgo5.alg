<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="start PREND_LA_VALEUR addition(start,start)"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#addition#x,y" algoitem="FONCTION addition(x,y)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#total" algoitem="total EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#total#x+y#pasliste" algoitem="total PREND_LA_VALEUR x+y"/>
            <item code="205#total" algoitem="RENVOYER total"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#start" algoitem="start EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#start#round(random()*100)#pasliste" algoitem="start PREND_LA_VALEUR round(random()*100)"/>
        <item code="6#start>0" algoitem="SI (start>0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="15#start &lt; 10000" algoitem="TANT_QUE (start &lt; 10000) FAIRE">
                <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
                <item code="5#start#addition(start,start)#pasliste" algoitem="start PREND_LA_VALEUR addition(start,start)"/>
                <item code="3#start#1#pasliste" algoitem="AFFICHER start"/>
                <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
