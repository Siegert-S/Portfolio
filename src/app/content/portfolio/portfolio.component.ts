import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  projects = [
    {
      name: 'test',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.saschasiegert.de',
      gitUrl: 'http://github.de',
      skills: ['HTML', 'CSS', 'Java Script'],
      text: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale',
    },
    {
      name: 'test',
      imgUrl: '../../../assets/img/icon.svg',
      webUrl: 'http://www.saschasiegert.de',
      gitUrl: 'http://github.de',
      skills: ['HTML', 'CSS', 'Java Script'],
      text: 'auch test',
    },
    {
      name: 'test',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.saschasiegert.de',
      gitUrl: 'http://github.de',
      skills: ['HTML', 'CSS', 'Java Script'],
      text: 'auch test',
    },
    {
      name: 'test',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.saschasiegert.de',
      gitUrl: 'http://github.de',
      skills: ['HTML', 'CSS', 'Java Script'],
      text: 'auch test',
    },
    {
      name: 'test',
      imgUrl: '../../../assets/img/picture_pc_join.svg',
      webUrl: 'http://www.saschasiegert.de',
      gitUrl: 'http://github.de',
      skills: ['HTML', 'CSS', 'Java Script'],
      text: 'auch test',
    }
  ]
}
