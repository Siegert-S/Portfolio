import { Component, inject } from '@angular/core';
import { LanguageService, TextKey, ComponentKey } from '../../../service/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private languageService = inject(LanguageService);
  private componentKey: ComponentKey = 'about';

  constructor() { }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}