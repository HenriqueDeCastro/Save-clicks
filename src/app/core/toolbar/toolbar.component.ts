import { delay, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ThemingService } from '@services/services/theming/theming.service';

@Component({
  selector: 'f1-data-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  currentTheme$: Observable<string>;

  constructor(private themingService: ThemingService) {
    this.currentTheme$ = this.themingService.currentActive().pipe(delay(0));
  }

}
