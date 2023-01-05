import { Component } from '@angular/core';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'f1-data-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {

  cardsList: NaviagationElement[];

  constructor() {
    const currentYear = new Date().getFullYear().toString();

    this.cardsList = [
      {
        title: 'Historical Data',
        icon: '&#xe922;',
        description: `Data and statistics of the Formula 1 seasons from 1950 to ${currentYear}.`
      },
      {
        title: 'Lap Times',
        icon: '&#xe425;',
        description: 'From the 1994 season and onward all the lap times from every race.'
      },
      {
        title: 'Formula 1 News',
        icon: '&#xeb81;',
        description: 'Category news teams and drivers from the main portals.'
      },
    ]
  }
}
