import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  email: string = 'Kontakt@SaschaSiegert.de';
  subject: string = '?subject=Interessiert%20an%20Zusammenarbeit';
}
