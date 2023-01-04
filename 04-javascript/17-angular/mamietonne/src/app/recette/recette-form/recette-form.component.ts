import { Component, Input } from '@angular/core';
import { Recette } from '../Recette';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent {
  @Input() recette?: Recette;
}
