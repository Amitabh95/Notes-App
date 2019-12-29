import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from '../Shared-Components/Header/header.component';
import { FooterComponent } from '../Shared-Components/Footer/footer.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
