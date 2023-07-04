import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
