import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../service/language.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  private languageService = inject(LanguageService);

  get hint(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.hint!;
  }

  get email(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.email!;
  }

  get subject(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.subject!;
  }

  get bnt(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.button!;
  }

  get head1(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.headline1!;
  }

  get head2(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.headline2!;
  }

  get head3(): string {
    return this.languageService.language[this.languageService.selectedLanguage].aboveTheFold.headline3!;
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
