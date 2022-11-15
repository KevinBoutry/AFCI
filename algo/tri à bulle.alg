<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="POUR i ALLANT_DE 0 A 19"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="numero EST_DU_TYPE LISTE" code="1#LISTE#numero"/>
        <item algoitem="tampon EST_DU_TYPE NOMBRE" code="1#NOMBRE#tampon"/>
        <item algoitem="boucle EST_DU_TYPE NOMBRE" code="1#NOMBRE#boucle"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 0 A 19" code="12#i#0#19">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="numero[i] PREND_LA_VALEUR round(random()*100)" code="5#numero#round(random()*100)#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="POUR i ALLANT_DE 0 A 19" code="12#i#0#19">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER numero[i]" code="3#numero#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="TANT_QUE (numero[0] > numero[1] OU numero[1] > numero[2] OU numero[2] > numero[3] OU numero[3] > numero[4] OU numero[4] > numero[5] OU numero[5] > numero[6] OU numero[6] > numero[7] OU numero[7] > numero[8] OU numero[8] > numero[9] OU numero[10] > numero[11] OU numero[11] > numero[12] OU numero[12] > numero[13] OU numero[13] > numero[14] OU numero[14] > numero[15] OU numero[15] > numero[16] OU numero[16] > numero[17] OU numero[17] > numero[18] OU numero[18] > numero[19]) FAIRE" code="15#numero[0] > numero[1] OU numero[1] > numero[2] OU numero[2] > numero[3] OU numero[3] > numero[4] OU numero[4] > numero[5] OU numero[5] > numero[6] OU numero[6] > numero[7] OU numero[7] > numero[8] OU numero[8] > numero[9] OU numero[10] > numero[11] OU numero[11] > numero[12] OU numero[12] > numero[13] OU numero[13] > numero[14] OU numero[14] > numero[15] OU numero[15] > numero[16] OU numero[16] > numero[17] OU numero[17] > numero[18] OU numero[18] > numero[19]">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="POUR boucle ALLANT_DE 0 A 19" code="12#boucle#0#19">
                <item algoitem="DEBUT_POUR" code="13#debutpour"/>
                <item algoitem="SI (numero[boucle] > numero[boucle+1]) ALORS" code="6#numero[boucle] > numero[boucle+1]">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="tampon PREND_LA_VALEUR numero[boucle]" code="5#tampon#numero[boucle]#pasliste"/>
                    <item algoitem="numero[boucle] PREND_LA_VALEUR numero[boucle+1]" code="5#numero#numero[boucle+1]#boucle"/>
                    <item algoitem="numero[boucle+1] PREND_LA_VALEUR tampon" code="5#numero#tampon#boucle+1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                </item>
                <item algoitem="FIN_POUR" code="14#finpour"/>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;test&quot;" code="4#test#1"/>
        <item algoitem="POUR i ALLANT_DE 0 A 19" code="12#i#0#19">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER numero[i]" code="3#numero#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
