import { Component, OnInit } from '@angular/core';
import { RECETTES } from "./RecetteList";
import { Recette } from "./Recette";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mamietonne';
  recetteList : Recette[] = RECETTES;
  recetteSelected : Recette|undefined
  ngOnInit():void
  {
    console.log(this.recetteList[0].name);
  }
  selectRecette(recetteId: string):void
  {
    const index: number = parseInt(recetteId);
    const recette: Recette|undefined = this.recetteList.find(rec=>rec.id === index);
    if(recette)
      console.log(`Vous avez selectionné ${recette.name}`);
    else
    console.log("Aucune correspondance trouvée");
    this.recetteSelected = recette;
    
  }
}

