import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavBarComponent, AboveTheFoldComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {


}
