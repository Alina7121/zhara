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
    // Set the date we're counting down to
    const countDownDate = new Date("June 29, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    this.countdownInterval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000); // Update every 1 second
  }

}
