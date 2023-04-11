import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DrugSelectionComponent } from './components/drug-selection/drug-selection.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MaterialExampleModule} from '../material.module';

@NgModule({
  declarations: [AppComponent, DrugSelectionComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSlideToggleModule, MaterialExampleModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
