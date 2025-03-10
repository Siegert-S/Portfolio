import { Component, inject } from '@angular/core';
import { LanguageService, ComponentKey, TextKey, Section } from '../service/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  private languageService = inject(LanguageService);
  private componentKey: ComponentKey = 'legalNotice';
  private sectionKey: Section = 'legal';

  email = 'Kontakt@SaschaSiegert.de';

  // get email() {
  // return this.languageService.getLanguage('aboveTheFold', 'email')
  // }

  getText(target: 'title' | number) {
    const paragraph = this.languageService.getLanguage(this.sectionKey, this.componentKey);
    if (!paragraph) {
      console.log('nicht vorhanden');
      return null;
    }
    if (target === 'title') {
      return paragraph.title;
    } else {
      return paragraph.text?.[target] ?? `Fehler: Kein Text für Index ${target} vorhanden.`;
    }
  }
}
