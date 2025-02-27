import { Component, inject } from '@angular/core';
import { ComponentKey, LanguageService, TextKey } from '../../../service/language.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  private languageService = inject(LanguageService);
  private componentKey: ComponentKey = 'aboveTheFold';

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getText(text: TextKey) {
    // return this.languageService.getLanguage(this.componentKey, text);
  }
}
