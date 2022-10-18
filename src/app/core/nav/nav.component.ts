import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  showMoreOptions: boolean;

  constructor() {
    this.showMoreOptions = false;
  }

  moreOptions(): void {
    this.showMoreOptions = !this.showMoreOptions;
  }
}
