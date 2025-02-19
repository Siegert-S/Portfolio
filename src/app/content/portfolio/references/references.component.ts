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
      img: '../../../../assets/img/user-icon.png',
      name: 'Name',
      text: 'reference text 1'
    }, {
      img: '../../../../assets/img/user-icon.png',
      name: 'Name',
      text: 'reference text 2'
    }, {
      img: '../../../../assets/img/user-icon.png',
      name: 'Name',
      text: 'reference text 3'
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
