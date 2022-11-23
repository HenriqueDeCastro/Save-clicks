import { Component, Input } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ThemingService } from 'src/app/core/services/theming/theming.service';
import { ColorScheme } from '../../classes/types';

@Component({
  selector: 'f1-data-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {

  @Input() extended!: boolean;
  themeToApply$: Observable<ColorScheme>;

  constructor(private themingService: ThemingService) {
    this.themeToApply$ = this.themingService.toApply();
  }

  changeTheme(scheme: ColorScheme): void {
    this.themingService.update(scheme);
  }
}
