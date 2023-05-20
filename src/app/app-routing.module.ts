import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrugSelectionComponent } from './components/drug-selection/drug-selection.component';
import { ClarificationsComponent } from './components/clarifications/clarifications.component';

const routes: Routes = [
  {path: '', component: DrugSelectionComponent},
  {path: 'clarification', component: ClarificationsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
