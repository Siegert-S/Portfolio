import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from "./references/references.component";
import { LanguageService, ComponentKey, TextKey, Section } from '../../../service/language.service';
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
  private sectionKey: Section = 'content';
  private projectsService = inject(ProjectService);

  private componentKey: ComponentKey = 'portfolio';

  projects = this.projectsService.getProjects();

  constructor() { }

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
