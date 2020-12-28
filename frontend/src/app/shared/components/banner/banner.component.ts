import { Component, Input, OnInit } from '@angular/core';
import { BannerItem } from '../../models/banner-item.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() item: BannerItem;
  imageBanner: string;
  
  constructor() { }

  ngOnInit() {
    this.imageBanner = this.item.imageBanner;
  }

}
