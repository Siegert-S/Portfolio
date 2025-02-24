import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService, ComponentKey, TextKey } from '../../service/language.service';
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

  get about(): string {
    return this.languageService.language[this.languageService.selectedLanguage].navBar.about!;
  }
  get skills(): string {
    return this.languageService.language[this.languageService.selectedLanguage].navBar.skills!;
  }
  get portfolio(): string {
    return this.languageService.language[this.languageService.selectedLanguage].navBar.portfolio!;
  }
  get contact(): string {
    return this.languageService.language[this.languageService.selectedLanguage].navBar.contact!;
  }
  get language(): string {
    return this.languageService.language[this.languageService.selectedLanguage].navBar.language!;
  }



  activLink = 0;
  burgerMenuOpen = false;

  constructor() { }

  clickLink(number: number) {
    this.activLink = number;
    this.clickBurgerMenu()
  }

  clickBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen
  }

  changeLanguage() {
    this.languageService.changeLanguage();
  }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
