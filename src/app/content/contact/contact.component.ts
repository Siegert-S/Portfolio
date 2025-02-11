import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  submitAttempt = false;

  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\d\\s]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$')]),
      message: new FormControl('', [Validators.required]),
      privacy: new FormControl(false, Validators.requiredTrue)
    }
  );

  constructor() {

  }

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
      console.log(this.form.value);

      this.http.post(this.post.endPoint, this.post.body(this.form.value))
        .subscribe({
          next: (response) => {
            console.log(response);

            this.form.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

      this.form.reset();
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
}
