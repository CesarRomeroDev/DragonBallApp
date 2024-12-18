import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRaceComponent } from './pages/by-race/by-race.component';
import { ByPersonComponent } from './pages/by-person/by-person.component';
import { HomeComponent } from './pages/home/home.component';

import { dragonballRoutingModule } from './dragonball-routing.module';
import { DragonballCardComponent } from './components/dragonball-card/dragonball-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByNameComponent,
    ByRaceComponent,
    ByPersonComponent,
    HomeComponent,
    DragonballCardComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    dragonballRoutingModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class DragonBallModule { }
