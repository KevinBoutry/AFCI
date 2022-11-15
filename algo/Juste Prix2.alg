<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="POUR tentative ALLANT_DE 0 A 9"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="victoire EST_DU_TYPE NOMBRE" code="1#NOMBRE#victoire"/>
        <item algoitem="essai EST_DU_TYPE NOMBRE" code="1#NOMBRE#essai"/>
        <item algoitem="tentative EST_DU_TYPE NOMBRE" code="1#NOMBRE#tentative"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="victoire PREND_LA_VALEUR round(random()*100)" code="5#victoire#round(random()*100)#pasliste"/>
        <item algoitem="POUR tentative ALLANT_DE 0 A 9" code="12#tentative#0#9">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="TANT_QUE (essai != victoire) FAIRE" code="15#essai != victoire">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="AFFICHER &quot;Entrez un chiffre : &quot;" code="4#Entrez un chiffre : #0"/>
                <item algoitem="LIRE essai" code="2#essai#pasliste"/>
                <item algoitem="SI (essai > victoire) ALORS" code="6#essai > victoire">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Plus petit !&quot;" code="4#Plus petit !#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (essai &lt; victoire) ALORS" code="6#essai &lt; victoire">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Plus grand !&quot;" code="4#Plus grand !#1"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="AFFICHER &quot;VICTOIRE !&quot;" code="4#VICTOIRE !#0"/>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;DEFAITE !&quot;" code="4#DEFAITE !#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
