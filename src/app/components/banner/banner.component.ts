import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  banner: string[] = [
    'bandeau_slogan.png',
    'bandeau_bartop.png'
  ];

  currentImage: number = 0;
  interval: any;

  ngOnInit():void {
    this.startAutoSlide();
  }

  ngOnDestroy():void {
   if(this.interval)
    clearInterval(this.interval);
  }

  startAutoSlide():void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  stopAutoSlide():void {
    if(this.interval)
      clearInterval(this.interval);
  }

  nextImage():void {
    this.currentImage = (this.currentImage + 1) % this.banner.length;
  }

  prevImage():void {
    this.currentImage = (this.currentImage - 1 + this.banner.length) % this.banner.length;
  }
}
