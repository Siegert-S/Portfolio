import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentKey, LanguageService, TextKey } from '../../../service/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private languageService = inject(LanguageService);
  private componentKey: ComponentKey = 'contact';

  http = inject(HttpClient);
  submitAttempt = false;
  response = false;
  isSuccsesfull = true;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('^(?!\\s*$).+')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$')]),
      message: new FormControl('', [Validators.required, Validators.pattern('^(?!\\s*$).+')]),
      privacy: new FormControl(false, Validators.requiredTrue)
    }
  );

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

  constructor() { }

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

  showPolicyErrorMsg() {
    let flag = false;
    let filed = this.form.get('privacy')!;
    flag = filed.invalid && (filed.dirty || this.submitAttempt);
    return flag;
  }

  responsToUser() {
    this.response = !this.response;
  }

  getText(text: TextKey) {
    return this.languageService.getLanguage(this.componentKey, text);
  }
}
