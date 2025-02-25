import { Component, inject } from '@angular/core';
import { LanguageService, ComponentKey, TextKey } from '../service/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  private languageService = inject(LanguageService);
  private componentKey: ComponentKey = 'legal';

  // email = 'test';

  get email() {
    return this.languageService.getLanguage('aboveTheFold', 'email')
  }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
