import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  referencList = [
    {
      img: '../../../../assets/img/picture01_cut_small.png',
      name: 'Tester vom testing Team',
      text: 'text zum testen des textfeld und ich muss auch noch ein bild raussuchen!'
    }, {
      img: '',
      name: 'Tester',
      text: 'text zum testen des textfeld und ich muss auch noch ein bild raussuchen!'
    }, {
      img: '',
      name: 'Tester 3',
      text: 'text zum testen des textfeld '
    },
  ];

  indexCount = 0;


  showNextReferenc(shoNext: boolean) {
    if (shoNext) {
      this.indexCount++;
      if (this.indexCount == this.referencList.length) {
        this.indexCount = 0;
      }
    } else {
      this.indexCount--;
      if (this.indexCount < 0) {
        this.indexCount = this.referencList.length - 1;
      }
    }
  }
}
