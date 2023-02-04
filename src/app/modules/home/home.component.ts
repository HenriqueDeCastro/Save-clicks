import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeeService } from 'src/app/core/services/brasil-api/fee/fee.service';
import { IBrasilApiFee } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'save-clicks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fee$!: Observable<IBrasilApiFee[]>

  constructor(private feeService: FeeService) {}

  ngOnInit(): void {
    this.fee$ = this.feeService.getAll();
  }
}
