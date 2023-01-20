import { IBrasilApiFee } from './../../classes/interfaces/brasil-api/fee/brasil-api-fee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'save-clicks-fee-cards',
  templateUrl: './fee-cards.component.html',
  styleUrls: ['./fee-cards.component.scss']
})
export class FeeCardsComponent {

  @Input() fee!: IBrasilApiFee[];
}
