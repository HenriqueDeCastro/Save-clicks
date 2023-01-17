import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { colorScheme } from 'src/app/shared/classes/types';
import { AppRoutesEnum } from 'src/app/shared/classes/enums';
import { Router } from '@angular/router';
import { ThemingService } from '../../services/common/theming/theming.service';

@Component({
  selector: 'save-clicks-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  currentTheme$: Observable<colorScheme>;
  appRoutes: typeof AppRoutesEnum;

  constructor(private themingService: ThemingService, public router: Router) {
    this.currentTheme$ = this.themingService.currentActive();
    this.appRoutes = AppRoutesEnum;
  }
}
