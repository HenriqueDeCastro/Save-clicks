import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ButtonRouters } from '../../classes/interfaces';

@Component({
  selector: 'app-menu-routers',
  templateUrl: './menu-routers.component.html',
  styleUrls: ['./menu-routers.component.scss']
})
export class MenuRoutersComponent implements OnInit {

  buttonsRouters: ButtonRouters[];
  buttonTheme: ButtonRouters;

  constructor() {
    this.buttonsRouters = [
      {
        icon: faMoon,
        tooltip: 'Theme'
      }
    ];
    this.buttonTheme = {
      icon: faMoon,
      tooltip: 'Theme'
    }
  }

  ngOnInit(): void {
  }

}
