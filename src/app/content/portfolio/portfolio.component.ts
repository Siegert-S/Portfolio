import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from "./references/references.component";
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  private languageService = inject(LanguageService);

  get title(): string {
    return this.languageService.language[this.languageService.selectedLanguage].portfolio.title!;
  }
  get introText(): string {
    return this.languageService.language[this.languageService.selectedLanguage].portfolio.introText!;
  }

  projects = [
    {
      name: 'Knight Game',
      imgUrl: '../../../assets/img/picture_pc_knight-game.png',
      webUrl: 'http://knight-game.saschasiegert.de/',
      gitUrl: 'https://github.com/Siegert-S/knight-game',
      skills: ['HTML', 'CSS', 'JavaScript'],
      text: ` A 2D action game where you control a knight navigating through levels
              filled with skeletons and the powerful black mage boss.
              Defeat enemies to earn gold coins, collect healing red coins, 
              and use your rewards to upgrade the knights abilities between levels. 
              The game is built using an object-oriented programming structure`,
    },
    {
      name: 'Pokédex',
      imgUrl: '../../../assets/img/picture_pc_pokedex.png',
      webUrl: 'http://pokedex.saschasiegert.de/',
      gitUrl: 'https://github.com/Siegert-S/pokedex',
      skills: ['HTML', 'CSS', 'JavaScript', 'Api'],
      text: 'A simple library that catalogs and delivers Pokémon information, powered by the PokéAPI.',
    },
    {
      name: 'Join',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.join.saschasiegert.de/html/login.html',
      gitUrl: 'https://github.com/Siegert-S/join',
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      text: 'A task manager inspired by the Kanban system, allowing you to create and organize tasks through drag-and-drop functionality, and assign users and categories.',
    },
  ]
}
