import { Component, inject } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private languageService = inject(LanguageService);

  get legal(): string {
    return this.languageService.language[this.languageService.selectedLanguage].footer.legal!;
  }

  email: string = 'Kontakt@SaschaSiegert.de';
  subject: string = '?subject=Interessiert%20an%20Zusammenarbeit';
}
