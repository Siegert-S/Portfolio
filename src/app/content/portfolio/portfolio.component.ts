import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  projects = [
    {
      name: 'Knight Game',
      imgUrl: '../../../assets/img/picture_pc_knight-game.png',
      webUrl: 'http://knight-game.saschasiegert.de/',
      gitUrl: 'https://github.com/Siegert-S/knight-game',
      skills: ['HTML', 'CSS', 'Java Script'],
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
      skills: ['HTML', 'CSS', 'Java Script', 'Api'],
      text: 'A simple library that catalogs and delivers Pokémon information, powered by the PokéAPI.',
    },
    {
      name: 'Join',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.join.saschasiegert.de/html/login.html',
      gitUrl: 'https://github.com/Siegert-S/join',
      skills: ['HTML', 'CSS', 'Java Script', 'Firebase'],
      text: 'A task manager inspired by the Kanban system, allowing you to create and organize tasks through drag-and-drop functionality, and assign users and categories.',
    },
  ]
}
