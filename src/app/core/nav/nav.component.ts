import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  showMoreOptions: boolean;
  @Output() scroll: EventEmitter<boolean>;

  constructor() {
    this.showMoreOptions = false;
    this.scroll = new EventEmitter();
  }

  moreOptions(): void {
    this.showMoreOptions = !this.showMoreOptions;
    this.scroll.emit(!this.showMoreOptions)
  }
}
