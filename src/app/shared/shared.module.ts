import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';
import { SpinSearchComponent } from './components/spin-search/spin-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoadingCardComponent,
    LoadingCircleComponent,
    SpinSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoadingCardComponent,
    LoadingCircleComponent,
    SpinSearchComponent,
  ]
})
export class SharedModule { }
