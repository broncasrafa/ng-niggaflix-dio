import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItem } from '../../models/carousel-item.model';

@Component({
  selector: 'app-carousel-custom',
  templateUrl: './carousel-custom.component.html',
  styleUrls: ['./carousel-custom.component.css']
})
export class CarouselCustomComponent implements OnInit {
  
  @Input() slideItems: CarouselItem[];
  
  constructor() { }

  ngOnInit(): void {
  }

  defaultOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: { 
        items: 1 
      },
      600: { 
        items: 3 
      },
      1000: { 
        items: 5 
      }
    }
  }

  contemDados() {
    return this.slideItems != undefined && this.slideItems != null && this.slideItems.length > 0;
  }
}
