import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  countdownInterval: any;

  images: string[] = [
    'assets/images/img1.jpg',
    'assets/images/img4.jpg',
    'assets/images/img5.jpg',
    'assets/images/img6.jpg',
    'assets/images/img7.jpg',
    'assets/images/img8.jpg',
    'assets/images/img10.jpg',
    'assets/images/img11.jpg',
    'assets/images/img14.jpg',
    'assets/images/img15.jpg',
    'assets/images/img17.jpg',
    'assets/images/img20.jpg'
  ];

  constructor() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  ngOnInit(): void {
    this.initializeCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  initializeCountdown(): void {
    const countDownDate = new Date("June 29, 2024 00:00:00").getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }
}
