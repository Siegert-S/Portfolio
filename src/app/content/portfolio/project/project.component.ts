import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() project = { name: 'test', imgUrl: 'test', webUrl: '', gitUrl: '', skills: [''], text: 'auch test', };
  @Input() flip = 0;

}
