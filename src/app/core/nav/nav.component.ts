import { Component } from '@angular/core';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'f1-data-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  buttonList: NaviagationElement[];

  constructor() {
    this.buttonList = [
      {
        title: AppRoutesTitleEnum.HOME,
        icon: AppRoutesIconEnum.HOME,
        route: AppRoutesEnum.HOME
      },
      {
        title: AppRoutesTitleEnum.DRIVERS,
        icon: AppRoutesIconEnum.DRIVERS,
        route: AppRoutesEnum.DRIVERS,
        hideMobile: true
      },
      {
        title: AppRoutesTitleEnum.TEAMS,
        icon: AppRoutesIconEnum.TEAMS,
        route: AppRoutesEnum.TEAMS
      },
      {
        title: AppRoutesTitleEnum.SEASONS,
        icon: AppRoutesIconEnum.SEASONS,
        route: AppRoutesEnum.SEASONS,
      },
      {
        title: AppRoutesTitleEnum.NEWS,
        icon: AppRoutesIconEnum.NEWS,
        route: AppRoutesEnum.NEWS,
      }
    ];
  }
}
