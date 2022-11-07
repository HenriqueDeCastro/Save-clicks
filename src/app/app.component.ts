import { ScrimService } from './core/services/scrim/scrim.service';
import { DrawerService } from './core/services/drawer/drawer.service';
import { Component } from '@angular/core';
import { ThemingService } from '@services/services/theming/theming.service';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'f1-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  scroll: boolean;
  showDrawer$: Observable<boolean>;
  showScrim$: Observable<boolean>;

  constructor(
    private themingService: ThemingService,
    private scrimService: ScrimService,
    private drawerService: DrawerService) {
    this.themingService.load();
    this.scroll = true;
    this.showDrawer$ = this.drawerService.status().pipe(delay(0));
    this.showScrim$ = this.scrimService.status().pipe(delay(0));
  }
}
