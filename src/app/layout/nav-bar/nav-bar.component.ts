import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService, ComponentKey, TextKey, LanguageKey, Section, Paragraph } from '../../service/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private languageService = inject(LanguageService);
  private sectionKey: Section = 'layout';
  private componentKey: ComponentKey = 'navBar';

  activLink = 0;
  burgerMenuOpen = false;
  languageMenuOpen = false;

  activlanguage: LanguageKey;

  constructor() {
    this.activlanguage = this.languageService.selectedLanguage;
  }

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

  clickLink(number: number) {
    this.activLink = number;
    this.clickBurgerMenu()
  }

  clickBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }

  clickLanguageMenu() {
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  setLanguage(lang: LanguageKey) {
    this.languageService.selectLanguage(lang);
    // this.languageMenuOpen = true;
    this.activlanguage = lang;
  }

  changeLanguage() {
    if (this.activlanguage == 'de') {
      this.setLanguage('en');
    } else {
      this.setLanguage('de');
    }
  }
}
