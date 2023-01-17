import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from 'src/app/core/services/common/theming/theming.service';
import { colorScheme } from '../../classes/types';

@Component({
  selector: 'save-clicks-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {

  @Input() extended!: boolean;
  themeToApply$: Observable<colorScheme>;

  constructor(private themingService: ThemingService) {
    this.themeToApply$ = this.themingService.toApply();
  }

  changeTheme(scheme: colorScheme): void {
    this.themingService.update(scheme);
  }
}
