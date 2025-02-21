import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from "./references/references.component";
import { LanguageService } from '../../../service/language.service';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  private languageService = inject(LanguageService);
  private projectsService = inject(ProjectService);

  get title(): string {
    return this.languageService.language[this.languageService.selectedLanguage].portfolio.title!;
  }
  get introText(): string {
    return this.languageService.language[this.languageService.selectedLanguage].portfolio.introText!;
  }

  projects = this.projectsService.getProjects();

  constructor() { }
}
