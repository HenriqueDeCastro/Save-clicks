import { ThemingService } from '@services/services/theming/theming.service';
import { Component, Input } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'f1-data-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {

  @Input() extended!: boolean;
  currentTheme$: Observable<string>;

  constructor(private themingService: ThemingService) {
    this.currentTheme$ = this.themingService.currentActive().pipe(delay(0));
  }

  changeTheme(): void {
    this.themingService.update();
  }

}
