import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    TacticsRoutingModule
  ]
})
export class TacticsModule { }
