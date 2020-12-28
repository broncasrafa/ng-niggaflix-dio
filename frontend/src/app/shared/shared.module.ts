import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CarouselCustomComponent } from './components/carousel-custom/carousel-custom.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedService } from './shared.service';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    CarouselCustomComponent, 
    FooterComponent, 
    NavComponent, 
    BannerComponent
  ],
  providers: [
    SharedService
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    CarouselCustomComponent, 
    FooterComponent, 
    NavComponent,
    BannerComponent
  ]
})
export class SharedModule { }
