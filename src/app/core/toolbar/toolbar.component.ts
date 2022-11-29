import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ColorScheme } from 'src/app/shared/classes/types';
import { ThemingService } from '../services/theming/theming.service';

@Component({
  selector: 'f1-data-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  currentTheme$: Observable<ColorScheme>;

  constructor(private themingService: ThemingService) {
    this.currentTheme$ = this.themingService.currentActive();
  }
}
