import { Component, inject } from '@angular/core';
import { SkillIconComponent } from "./skill-icon/skill-icon.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  private languageService = inject(LanguageService);

  get title(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.title!;
  }
  get introText(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.introText!;
  }
  get questionFron(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.questionFron!;
  }
  get questionBack(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.questionBack!;
  }
  get callToAction(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.callToAction!;
  }
  get bnt(): string {
    return this.languageService.language[this.languageService.selectedLanguage].skills.button!;
  }

  skillList = [
    { url: '../../../assets/img/html.svg', name: 'HTML' },
    { url: '../../../assets/img/css.svg', name: 'CSS' },
    { url: '../../../assets/img/javascript.svg', name: 'JavaScript' },
    { url: '../../../assets/img/typescript.svg', name: 'TypeScript' },
    { url: '../../../assets/img/angular.svg', name: 'Angular' },
    { url: '../../../assets/img/firebase.svg', name: 'Firebase' },
    { url: '../../../assets/img/git.svg', name: 'Git' },
    { url: '../../../assets/img/api.svg', name: 'Rest Api' },
    { url: '../../../assets/img/scrum.svg', name: 'Scrum' },
    { url: '../../../assets/img/materialdesign.svg', name: 'Material Design' },
    { url: '../../../assets/img/learning.svg', name: 'Continually learning' },
  ];

  constructor(private router: Router) { }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
