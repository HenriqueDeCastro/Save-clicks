import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from 'src/app/core/services/theming/theming.service';
import { NaviagationElement } from 'src/app/shared/classes/interfaces';
import { ColorScheme } from 'src/app/shared/classes/types';

@Component({
  selector: 'save-clicks-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {

  currentTheme$: Observable<ColorScheme>;
  cardsList: NaviagationElement[];

  constructor(private themingService: ThemingService) {
    this.currentTheme$ = this.themingService.currentActive();
    this.cardsList = [
      {
        title: 'Sem burocracia',
        icon: '&#xe898;',
        description: 'Não exigimos login ou cadastro.'
      },
      {
        title: 'Diversidade de dados',
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
