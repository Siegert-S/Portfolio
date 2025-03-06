import { Component, inject } from '@angular/core';
import { LanguageService, Section, ComponentKey } from '../service/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  private languageService = inject(LanguageService);
  private sectionKey: Section = 'privacy';
  // private componentKey: ComponentKey = 'navBar';

  constructor() {
    console.log(this.languageService.languageText.de.privacy);
    console.log(Object.keys(this.languageService.languageText.de.privacy));


  }

  getText(componentKey: ComponentKey, target: 'title' | number) {
    const paragraph = this.languageService.getLanguage(this.sectionKey, componentKey);
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
