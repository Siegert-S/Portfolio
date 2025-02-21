import { Component, Input, Type } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  @Input() showContent: string = 'above-the-fold';

  componentMap: { [key: string]: Type<any> } = {
    'above-the-fold': AboveTheFoldComponent,
    'about': AboutComponent,
    'skills': SkillsComponent,
    'portfolio': PortfolioComponent,
    'contact': ContactComponent
  };

  get selectedComponent(): Type<any> | null {
    return this.componentMap[this.showContent] || null;
  }
}
