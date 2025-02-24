import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from "./references/references.component";
import { LanguageService, ComponentKey, TextKey } from '../../../service/language.service';
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

  private componentKey: ComponentKey = 'portfolio';

  projects = this.projectsService.getProjects();

  constructor() { }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
