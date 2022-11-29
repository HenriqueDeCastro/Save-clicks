import { ScrimService } from './core/services/scrim/scrim.service';
import { DrawerService } from './core/services/drawer/drawer.service';
import { Component } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ThemingService } from './core/services/theming/theming.service';

@Component({
  selector: 'f1-data-root',
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
