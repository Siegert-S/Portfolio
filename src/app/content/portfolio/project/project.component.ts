import { Component, inject, Input } from '@angular/core';
import { ProjectService, Project } from '../../../service/project.service';
import { LanguageService } from '../../../service/language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  private languageService = inject(LanguageService);

  get language() {
    return this.languageService.selectedLanguage;
  }

  @Input() project!: Project;
  @Input() flip = 0;

}
