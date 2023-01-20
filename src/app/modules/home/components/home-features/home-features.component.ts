import { AppRoutesDescriptionEnum } from './../../../../shared/classes/enums/app-routes/app-routes-description.enum';
import { Component } from '@angular/core';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { INaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'save-clicks-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss'],
})
export class HomeFeaturesComponent {

  cardsList: INaviagationElement[];

  constructor() {
    this.cardsList = Object.keys(AppRoutesEnum)
      .filter((enumKey: string) => AppRoutesEnum[enumKey as keyof typeof AppRoutesEnum] !== AppRoutesEnum.HOME)
      .map((enumKey: string) => ({
        title: AppRoutesTitleEnum[enumKey as keyof typeof AppRoutesTitleEnum],
        icon: AppRoutesIconEnum[enumKey as keyof typeof AppRoutesIconEnum],
        route: AppRoutesEnum[enumKey as keyof typeof AppRoutesEnum],
        description: AppRoutesDescriptionEnum[enumKey as keyof typeof AppRoutesDescriptionEnum]
      }));
  }
}
