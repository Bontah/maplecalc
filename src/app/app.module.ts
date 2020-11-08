import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipmentComponent } from './features/equipment/equipment.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { StatsComponent } from './features/stats/stats.component';
import { CharselectComponent } from './features/charselect/charselect.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    StatsComponent,
    CharselectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
