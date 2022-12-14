import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';
import { DetailRecetteComponent } from './detail-recette/detail-recette.component';
import { BorderCardDirective } from './border-card.directive';
import { TypeColorPipe } from './type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RecetteService } from './recette.service';
import { EditRecetteComponent } from './edit-recette/edit-recette.component';
import { RecetteFormComponent } from './recette-form/recette-form.component';
import { FormsModule } from '@angular/forms';
import { CreateRecetteComponent } from './create-recette/create-recette.component';

const recetteRoutes: Routes = [
  {path: "recettes", component: ListeRecetteComponent},
  {path: "recette/create", component: CreateRecetteComponent},
  {path: "recette/:id", component: DetailRecetteComponent},
  {path: "edit/recette/:id", component: EditRecetteComponent}
];

@NgModule({
  declarations: [
    ListeRecetteComponent,
    DetailRecetteComponent,
    BorderCardDirective,    
    TypeColorPipe,
    EditRecetteComponent,
    RecetteFormComponent,
    CreateRecetteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(recetteRoutes)
  ],
  providers:[RecetteService]
})
export class RecetteModule { }
