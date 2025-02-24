import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService, ComponentKey, TextKey, LanguageKey } from '../../service/language.service';
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
  private componentKey: ComponentKey = 'navBar';

  activLink = 0;
  burgerMenuOpen = false;
  languageMenuOpen = false;

  constructor() { }

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
    this.languageMenuOpen = true;
  }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
