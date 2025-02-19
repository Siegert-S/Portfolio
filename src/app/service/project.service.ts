import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  imgUrl: string;
  webUrl: string;
  gitUrl: string;
  skills: string[];
  text: {
    en: string;
    de: string;
  };
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      name: 'Knight Game',
      imgUrl: '../../../assets/img/picture_pc_knight-game.png',
      webUrl: 'http://knight-game.saschasiegert.de/',
      gitUrl: 'https://github.com/Siegert-S/knight-game',
      skills: ['HTML', 'CSS', 'JavaScript'],
      text: {
        en: ` A 2D action game where you control a knight navigating through levels
              filled with skeletons and the powerful black mage boss.
              Defeat enemies to earn gold coins, collect healing red coins, 
              and use your rewards to upgrade the knights abilities between levels. 
              The game is built using an object-oriented programming structure`,
        de: `Ein 2D-Action-Spiel, bei dem du einen Ritter steuerst, der durch Levels navigiert,
              die mit Skeletten und dem mächtigen schwarzen Magier-Boss gefüllt sind.
              Besiege Feinde, um Goldmünzen zu verdienen, sammle heilende rote Münzen
              und benutze deine Belohnungen, um die Fähigkeiten des Ritters zwischen den Levels zu verbessern.
              Das Spiel ist unter Verwendung einer objektorientierten Programmierstruktur gebaut.`,

      },
    },
    {
      name: 'Pokédex',
      imgUrl: '../../../assets/img/picture_pc_pokedex.png',
      webUrl: 'http://pokedex.saschasiegert.de/',
      gitUrl: 'https://github.com/Siegert-S/pokedex',
      skills: ['HTML', 'CSS', 'JavaScript', 'Api'],
      text: {
        en: `A simple library that catalogs and delivers Pokémon information, powered by the PokéAPI.`,
        de: `Eine einfache Bibliothek, die Pokémon-Informationen katalogisiert und bereitstellt, betrieben durch die PokéAPI.`,

      },
    },
    {
      name: 'Join',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.join.saschasiegert.de/html/login.html',
      gitUrl: 'https://github.com/Siegert-S/join',
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      text: {
        en: `A task manager inspired by the Kanban system, allowing you to create and organize tasks through drag-and-drop functionality, and assign users and categories.`,
        de: `Ein Aufgabenmanager, inspiriert vom Kanban-System, der es dir ermöglicht, Aufgaben durch Drag-and-Drop-Funktionalität zu erstellen und zu organisieren sowie Benutzer und Kategorien zuzuweisen.`,

      },
    },
  ]


  constructor() { }


  getProjects() {
    return this.projects;
  }

}
