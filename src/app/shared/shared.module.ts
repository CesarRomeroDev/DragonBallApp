import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoadingCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoadingCardComponent
  ]
})
export class SharedModule { }
