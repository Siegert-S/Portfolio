import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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

  onSubmit() {
    this.submitAttempt = true;
    if (this.form.valid) {
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
