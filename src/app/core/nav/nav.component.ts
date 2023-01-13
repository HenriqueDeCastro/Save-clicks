import { Component } from '@angular/core';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'save-clicks-nav',
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
        title: AppRoutesTitleEnum.CEP,
        icon: AppRoutesIconEnum.CEP,
        route: AppRoutesEnum.CEP
      },
      {
        title: AppRoutesTitleEnum.ISBN,
        icon: AppRoutesIconEnum.ISBN,
        route: AppRoutesEnum.ISBN,
        hideMobile: true
      },
      {
        title: AppRoutesTitleEnum.CNPJ,
        icon: AppRoutesIconEnum.CNPJ,
        route: AppRoutesEnum.CNPJ
      },
      {
        title: AppRoutesTitleEnum.REGISTER,
        icon: AppRoutesIconEnum.REGISTER,
        route: AppRoutesEnum.REGISTER,
        hideMobile: true
      },
      {
        title: AppRoutesTitleEnum.FIPE,
        icon: AppRoutesIconEnum.FIPE,
        route: AppRoutesEnum.FIPE
      }
    ];
  }
}
