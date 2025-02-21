import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {


  private languageService = inject(LanguageService);

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
}
