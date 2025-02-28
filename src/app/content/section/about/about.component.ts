import { Component, inject } from '@angular/core';
import { LanguageService, TextKey, ComponentKey, Section } from '../../../service/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private languageService = inject(LanguageService);
  private sectionKey: Section = 'content';
  private componentKey: ComponentKey = 'about';

  constructor() { }

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