import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-sign-carousel',
  templateUrl: './sign-carousel.component.html',
  styleUrls: ['./sign-carousel.component.less']
})
export class SignCarouselComponent implements OnInit {
  delay = 5000;
  imgs = ['assets/images/data2.png', 'assets/images/data1.png', 'assets/images/data3.png']
  currentImg = this.imgs[0];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.nextImage();
    }, this.delay);
  }

  nextImage() {
    var nextIndex = this.imgs.indexOf(this.currentImg) + 1;
    if (nextIndex >= this.imgs.length)
      nextIndex = 0;

    this.currentImg = this.imgs[nextIndex];
    
    setTimeout(() => {
      this.nextImage();
    }, this.delay);
  }

}
