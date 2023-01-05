import { Component } from '@angular/core';

@Component({
  selector: 'f1-data-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: string;

  constructor() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
