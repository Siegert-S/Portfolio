import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private languageService = inject(LanguageService);

  get title(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.title!;
  }
  get contactHeading(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.contactHeading!;
  }
  get contactIntro(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.introText!;
  }
  get contactCTA(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.callToAction!;
  }
  get namePlaceholder(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.namePlaceholder!;
  }
  get nameError(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.nameError!;
  }
  get emailPlaceholder(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.emailPlaceholder!;
  }
  get emailError(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.emailError!;
  }
  get messagePlaceholder(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.messagePlaceholder!;
  }
  get messageError(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.messageError!;
  }
  get priPolicyFront(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.priPolicyFront!;
  }
  get priPolicy(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.priPolicy!;
  }
  get priPolicyBack(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.priPolicyBack!;
  }
  get priPolicyError(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.priPolicyError!;
  }
  get bnt(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.button!;
  }
  get succses(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.confirmSubmit!;
  }
  get failure(): string {
    return this.languageService.language[this.languageService.selectedLanguage].contact.errorSubmit!;
  }

  http = inject(HttpClient);
  submitAttempt = false;
  response = false;
  isSuccsesfull = true;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\d\\s]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$')]),
      message: new FormControl('', [Validators.required]),
      privacy: new FormControl(false, Validators.requiredTrue)
    }
  );

  constructor() { }

  post = {
    endPoint: 'https://saschasiegert.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    this.submitAttempt = true;
    if (this.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.form.value))
        .subscribe({
          next: (response) => {
            this.isSuccsesfull = true;
            this.form.reset();
          },
          error: (error) => { this.isSuccsesfull = false; },
          complete: () => { this.responsToUser() },
        });
      this.submitAttempt = false;
    }
  }

  formIsValid() {
    console.log(this.form.valid);
    return this.form.valid;
  }

  invalidityCheck(formControlName: string): boolean {
    const control = this.form.get(formControlName);
    if (!control) return false;

    return control.invalid && (control.touched || this.submitAttempt);
  }

  validityCheck(formControlName: string): boolean {
    const control = this.form.get(formControlName);
    if (!control) return false;

    return control.valid && control.touched;
  }

  responsToUser() {
    this.response = !this.response;
  }
}
