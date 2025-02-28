import { Component, inject } from '@angular/core';
import { ComponentKey, LanguageService, Section, TextKey } from '../../service/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private languageService = inject(LanguageService);
  private sectionKey: Section = 'layout';
  private componentKey: ComponentKey = 'footer';


  email = 'Kontakt@SaschaSiegert.de';
  subject = '?subject=Interessiert%20an%20Zusammenarbeit';

  getText(target: 'title' | number) {
    const paragraph = this.languageService.getLanguage(this.sectionKey, this.componentKey);
    if (!paragraph) {
      console.log('nicht vorhanden');
      return null;
    }
    if (target === 'title') {
      return paragraph.title;
    } else {
      return paragraph.text?.[target] ?? `Fehler: Kein Text für Index ${target} vorhanden. ${this.sectionKey} ${this.componentKey}`;
    }
  }
}
