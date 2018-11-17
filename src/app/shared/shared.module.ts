import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms'

import { TilesComponent } from './tiles/tiles.component';
import { TablesComponent } from './tables/tables.component';
import { BoxcolorDirective } from './boxcolor.directive';
import { TilecolorDirective } from './tilecolor.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TilesComponent, TablesComponent, BoxcolorDirective, TilecolorDirective, SearchPipe],
  exports:[TilesComponent, TablesComponent,BoxcolorDirective,TilecolorDirective,SearchPipe]
})

export class SharedModule { }
