import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  merchButtonVisible = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkIfInView();
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or intervals if needed
  }

  @HostListener('window:scroll', ['$event'])
  checkIfInView(): void {
    const element = this.elementRef.nativeElement.querySelector('.btn-merch');
    if (!element) {
      return;
    }
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    this.merchButtonVisible = rect.top <= viewHeight - rect.height / 2 && rect.bottom >= rect.height / 2;
    if (this.merchButtonVisible) {
      element.classList.add('jello');
    } else {
      element.classList.remove('jello');
    }
  }
}
