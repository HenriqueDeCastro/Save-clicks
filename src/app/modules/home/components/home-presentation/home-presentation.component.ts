import { Component } from '@angular/core';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'save-clicks-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {

  cardsList: NaviagationElement[];

  constructor() {
    this.cardsList = [
      {
        title: 'Sem burocracia',
        icon: '&#xe898;',
        description: 'Não exigimos login ou cadastro.'
      },
      {
        title: 'Diversidade da dados',
        icon: '&#xe9f4;',
        description: `Informações de CNPJ, ISBN, FIPE e muito mais.`
      },
      {
        title: 'Sem fins lucrativos',
        icon: '&#xef63;',
        description: 'Livre de anúncios.'
      }
    ]
  }
}
