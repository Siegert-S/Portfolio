import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  textCommute: string = 'Flexible in terms of working environments, I can work effectively both on-site in Cologne and remotely';
  textMantality: string = 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.';
  textProfession: string = `In my profession, programming isn\'t just about writing code;
                            it\'s a creative form of problem-solving. 
                            I take pride in my ability to distill complex technical challenges into simple,
                            user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`;
}