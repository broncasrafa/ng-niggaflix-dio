import { Component, OnInit } from '@angular/core';
import { BannerItem } from '../shared/models/banner-item.model';
import { CarouselItem } from '../shared/models/carousel-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banner: BannerItem;
  slideImages: CarouselItem[];

  constructor() { }

  ngOnInit() {
    this.getDadosBanner();
    this.slideImages = this.getImagesToCarousel();
  }

  getDadosBanner() {
    this.banner = new BannerItem()
    this.banner.title = "GAME OF THRONES";
    this.banner.synopse = `Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.`;
    this.banner.imageBanner = "assets/img/capa-got-3.jpg";
  }

  getImagesToCarousel() {
    const images: CarouselItem[] = [
      { id: 1,  title: 'image-01', src: 'assets/img/min_01.jpg', alt: 'image-01' },
      { id: 2,  title: 'image-02', src: 'assets/img/min_02.jpg', alt: 'image-02' },
      { id: 3,  title: 'image-03', src: 'assets/img/min_03.jpg', alt: 'image-03' },
      { id: 4,  title: 'image-04', src: 'assets/img/min_04.jpg', alt: 'image-04' },
      { id: 5,  title: 'image-05', src: 'assets/img/min_05.jpg', alt: 'image-05' },
      { id: 6,  title: 'image-06', src: 'assets/img/min_06.jpg', alt: 'image-06' },
      { id: 7,  title: 'image-07', src: 'assets/img/min_07.jpg', alt: 'image-07' },
      { id: 8,  title: 'image-08', src: 'assets/img/min_08.jpg', alt: 'image-08' },
      { id: 9,  title: 'image-09', src: 'assets/img/min_09.jpg', alt: 'image-09' },
      { id: 10, title: 'image-10', src: 'assets/img/min_10.jpg', alt: 'image-10' },
      { id: 11, title: 'image-11', src: 'assets/img/min_11.jpg', alt: 'image-11' },
      { id: 12, title: 'image-12', src: 'assets/img/min_12.jpg', alt: 'image-12' },
      { id: 13, title: 'image-13', src: 'assets/img/min_13.jpg', alt: 'image-13' },
      { id: 14, title: 'image-14', src: 'assets/img/min_14.jpg', alt: 'image-14' },
      { id: 15, title: 'image-15', src: 'assets/img/min_15.jpg', alt: 'image-15' }
    ];
    return images;
  }
}
