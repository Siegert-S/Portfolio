import { Component, inject } from '@angular/core';
import { SkillIconComponent } from "./skill-icon/skill-icon.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentKey, LanguageService, Section } from '../../../service/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconComponent, CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  private languageService = inject(LanguageService);
  private sectionKey: Section = 'content';
  private componentKey: ComponentKey = 'skills';

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
