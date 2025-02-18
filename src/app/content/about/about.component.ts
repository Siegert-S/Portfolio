import { Component, inject } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private languageService = inject(LanguageService);

  get title(): string {
    return this.languageService.language[this.languageService.selectedLanguage].about.title!;
  }

  get intro(): string {
    return this.languageService.language[this.languageService.selectedLanguage].about.introText!;
  }

  get textCommute(): string {
    return this.languageService.language[this.languageService.selectedLanguage].about.commuteText!;
  }

  get textMantality(): string {
    return this.languageService.language[this.languageService.selectedLanguage].about.mantalityText!;
  }

  get textProfession(): string {
    return this.languageService.language[this.languageService.selectedLanguage].about.professionText!;
  }

  constructor() { }
}