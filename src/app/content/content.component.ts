import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './section/above-the-fold/above-the-fold.component';
import { AboutComponent } from "./section/about/about.component";
import { SkillsComponent } from "./section/skills/skills.component";
import { PortfolioComponent } from "./section/portfolio/portfolio.component";
import { ContactComponent } from "./section/contact/contact.component";
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, SectionComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {


}
