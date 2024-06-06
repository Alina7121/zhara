import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  bands = [
    {
      name: 'Volkodrom',
      description: 'This is a description for Band 1.',
      image: 'assets/images/bands/volkodrom.png',
      youtubeLink: 'https://volkodrom.bandcamp.com/album/-'
    },
    {
      name: 'Anger by Design',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/angerbydesign.png',
      youtubeLink: 'https://www.youtube.com/watch?app=desktop&v=krhZ61XBv6E'
    },
    {
      name: 'Anastheia Band',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/nastya.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=3cE1nObOFnQ'
    },
    {
      name: 'HypnoPussy',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/hypnopussy.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=QhM2UVWt_20'
    },
    {
      name: 'Timequarium',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/tranquilium.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=i7zPfjCEb1Y'
    },
    {
      name: 'Art & Shock',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/art.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=LHMQqMHoBfc'
    },
    {
      name: 'R Rated',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/rrated.jpg',
      youtubeLink: 'https://www.facebook.com/musicrrated/'
    }
  ];

  animateCards: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.animateCardsSequentially();
  }

  animateCardsSequentially(): void {
    this.bands.forEach((_, index) => {
      setTimeout(() => {
        this.animateCards[index] = true;
      }, index * 300); // Adjust the delay as needed
    });
  }
}


/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  bands = [
    {
      name: 'Volkodrom',
      description: 'This is a description for Band 1.',
      image: 'assets/images/bands/volkodrom.png',
      youtubeLink: 'https://volkodrom.bandcamp.com/album/-'
    },
    {
      name: 'Anger by Design',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/angerbydesign.png',
      youtubeLink: 'https://www.youtube.com/watch?app=desktop&v=krhZ61XBv6E'
      },
    {
      name: 'Anastheia Band',
      description: 'This is a description for Band 2.',
      image: 'assets/images/bands/nastya.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=3cE1nObOFnQ'
    },
    {
    name: 'HypnoPussy',
    description: 'This is a description for Band 2.',
    image: 'assets/images/bands/hypnopussy.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=QhM2UVWt_20'
  },
{
name: 'Timequarium',
description: 'This is a description for Band 2.',
image: 'assets/images/bands/tranquilium.jpg',
youtubeLink: 'https://www.youtube.com/watch?v=i7zPfjCEb1Y'
},
{
name: 'Art & Shock',
description: 'This is a description for Band 2.',
image: 'assets/images/bands/art.jpg',
youtubeLink: 'https://www.youtube.com/watch?v=LHMQqMHoBfc'
},
{
  name: 'R Rated',
  description: 'This is a description for Band 2.',
  image: 'assets/images/bands/rrated.jpg',
  youtubeLink: 'https://www.facebook.com/musicrrated/'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
*/