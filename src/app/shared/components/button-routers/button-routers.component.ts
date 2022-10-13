import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonRouters } from '../../classes/interfaces';

@Component({
  selector: 'app-button-routers',
  templateUrl: './button-routers.component.html',
  styleUrls: ['./button-routers.component.scss']
})
export class ButtonRoutersComponent implements OnInit {

  @Input() data!: ButtonRouters;
  @Output() click: EventEmitter<boolean>;

  constructor() {
    this.click = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
