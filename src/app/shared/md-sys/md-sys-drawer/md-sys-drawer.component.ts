import { Component, Input } from '@angular/core';
import { DrawerService } from 'src/app/core/services/drawer/drawer.service';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from '../../classes/enums';
import { NaviagationElement } from '../../classes/interfaces';

@Component({
  selector: 'md-sys-drawer',
  templateUrl: './md-sys-drawer.component.html',
  styleUrls: ['./md-sys-drawer.component.scss']
})
export class MdSysDrawerComponent {

  @Input() show!: boolean;
  buttonList: NaviagationElement[];

  constructor(private drawerService: DrawerService) {
    this.buttonList = [
      {
        title: AppRoutesTitleEnum.HOME,
        icon: AppRoutesIconEnum.HOME,
        route: AppRoutesEnum.HOME
      },
      {
        title: AppRoutesTitleEnum.DRIVERS,
        icon: AppRoutesIconEnum.DRIVERS,
        route: AppRoutesEnum.DRIVERS
      },
      {
        title: AppRoutesTitleEnum.TEAMS,
        icon: AppRoutesIconEnum.TEAMS,
        route: AppRoutesEnum.TEAMS
      },
      {
        title: AppRoutesTitleEnum.RACES,
        icon: AppRoutesIconEnum.RACES,
        route: AppRoutesEnum.RACES,
      },
      {
        title: AppRoutesTitleEnum.CIRCUITS,
        icon: AppRoutesIconEnum.CIRCUITS,
        route: AppRoutesEnum.CIRCUITS,
      },
      {
        title: AppRoutesTitleEnum.SEASONS,
        icon: AppRoutesIconEnum.SEASONS,
        route: AppRoutesEnum.SEASONS
      },
      {
        title: AppRoutesTitleEnum.NEWS,
        icon: AppRoutesIconEnum.NEWS,
        route: AppRoutesEnum.NEWS
      }
    ]
  }

  changeStatusDrawer(): void {
    this.drawerService.change();
  }
}
