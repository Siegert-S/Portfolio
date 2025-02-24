import { Component, inject } from '@angular/core';
import { ComponentKey, LanguageService, TextKey } from '../../service/language.service';
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
  private componentKey: ComponentKey = 'footer';

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
