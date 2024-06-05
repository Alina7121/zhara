import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  
  images: string[] = [
    'assets/images/img1.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',
    'assets/images/img5.jpg',
    'assets/images/img6.jpg',
    'assets/images/img7.jpg',
    'assets/images/img8.jpg',
    'assets/images/img10.jpg',
    'assets/images/img11.jpg',
    'assets/images/img12.jpg',
    'assets/images/img13.jpg',
    'assets/images/img14.jpg',
    'assets/images/img15.jpg',
    'assets/images/img16.jpg',
    'assets/images/img17.jpg',
    'assets/images/img20.jpg'
  ];

  ngAfterViewInit() {
    // Initialize the Bootstrap carousel after the view has been initialized
    if (this.carousel && this.carousel.nativeElement) {
      new bootstrap.Carousel(this.carousel.nativeElement);
    }
  }

  selectImage(index: number): void {
    // Function to set the clicked image as the active one in the carousel
    if (this.carousel && this.carousel.nativeElement) {
      const carouselInstance = bootstrap.Carousel.getInstance(this.carousel.nativeElement);
      if (carouselInstance) {
        carouselInstance.to(index);
      }
    }
  }
}
