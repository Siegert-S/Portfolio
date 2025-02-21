import { Component } from '@angular/core';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {


}
