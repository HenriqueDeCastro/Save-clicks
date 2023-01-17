import { DrawerService } from './core/services/common/drawer/drawer.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from './core/services/common/theming/theming.service';
import { ScrimService } from './core/services/common/scrim/scrim.service';

@Component({
  selector: 'save-clicks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDrawer$: Observable<boolean>;
  showScrim$: Observable<boolean>;

  constructor(
    private themingService: ThemingService,
    private scrimService: ScrimService,
    private drawerService: DrawerService) {
    this.themingService.load();
    this.showDrawer$ = this.drawerService.status();
    this.showScrim$ = this.scrimService.status();
  }
}
