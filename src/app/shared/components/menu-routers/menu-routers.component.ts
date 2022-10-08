import { Component, OnInit } from '@angular/core';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu-routers',
  templateUrl: './menu-routers.component.html',
  styleUrls: ['./menu-routers.component.scss']
})
export class MenuRoutersComponent implements OnInit {

  faMessage = faMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
