import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Welcome to Zhara Music Festival, a vibrant celebration of culture and music.' });
    this.meta.updateTag({ name: 'keywords', content: 'music, festival, culture, celebration, Zhara' });
  }
}