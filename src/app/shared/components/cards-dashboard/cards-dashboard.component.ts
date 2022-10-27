import { Component } from '@angular/core';
import { CardsDashboard } from '../../classes/interfaces';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.scss']
})
export class CardsDashboardComponent {

  cards: CardsDashboard[];

  constructor() {
    this.cards = [
      {
        icon: '&#xe88a;',
        title: 'Home',
        subtitle: 'home',
        route: '/home'
      },
      {
        icon: '&#xe51c;',
        title: 'Theme',
        subtitle: 'theme',
        route: '/Theme'
      }
    ]
  }
}
