import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TacticsRoutingModule } from "./tactics-routing.module";
import { TacticsComponent } from './tactics.component';
import { MapComponent } from './map/map.component';
import { MapCellComponent } from './map-cell/map-cell.component';
import { TokenComponent } from './token/token.component';



@NgModule({
  declarations: [
    TacticsComponent,
    MapComponent,
    MapCellComponent,
    TokenComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    TacticsRoutingModule
  ]
})
export class TacticsModule { }
