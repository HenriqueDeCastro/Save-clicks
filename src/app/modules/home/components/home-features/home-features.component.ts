import { Component, ViewEncapsulation } from '@angular/core';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'f1-data-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeFeaturesComponent {

  cardsList: NaviagationElement[];

  constructor() {
    this.cardsList = [
      {
        title: AppRoutesTitleEnum.DRIVERS,
        icon: AppRoutesIconEnum.DRIVERS,
        route: AppRoutesEnum.DRIVERS,
        description: 'Titles, pole positions, podiums, race results and much more.'
      },
      {
        title: AppRoutesTitleEnum.TEAMS,
        icon: AppRoutesIconEnum.TEAMS,
        route: AppRoutesEnum.TEAMS,
        description: 'Complete list of drivers and results from the constructors championships.'
      },
      {
        title: AppRoutesTitleEnum.RACES,
        icon: AppRoutesIconEnum.RACES,
        route: AppRoutesEnum.RACES,
        description: 'Qualifying, positions and lap times.'
      },
      {
        title: AppRoutesTitleEnum.CIRCUITS,
        icon: AppRoutesIconEnum.CIRCUITS,
        route: AppRoutesEnum.CIRCUITS,
        description: 'All circuits that passed through the category.'
      },
      {
        title: AppRoutesTitleEnum.SEASONS,
        icon: AppRoutesIconEnum.SEASONS,
        route: AppRoutesEnum.SEASONS,
        description: 'Driver and constructor standings, races and more.'
      },
      {
        title: AppRoutesTitleEnum.NEWS,
        icon: AppRoutesIconEnum.NEWS,
        route: AppRoutesEnum.NEWS,
        description: 'News from categories, teams and drivers.'
      }
    ];
  }
}
