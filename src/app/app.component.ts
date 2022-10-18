import { Component } from '@angular/core';
import { ThemingService } from '@services/services/theming/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isFontsLoaded!: boolean;

  constructor(private themingService: ThemingService) {
    this.themingService.load();
    document.fonts.ready.then(() => (this.isFontsLoaded = true));
  }

}
