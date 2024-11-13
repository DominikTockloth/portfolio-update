import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransparentInputDirective } from '../transparent-input.directive';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    TransparentInputDirective,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss','./contact-form-responsive.scss']
})



export class ContactFormComponent {
  constructor() { }

  http = inject(HttpClient);
  isSubmitted: boolean = false;
  isMailSent: boolean = false;

  messageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.required]),
    checkbox: new FormControl(false, Validators.requiredTrue)
  });

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  post = {
    endPoint: 'https://dominik-tockloth.de/send-mail/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    this.isSubmitted = true;
    if (this.messageForm.valid && this.isSubmitted) {
      this.http.post(this.post.endPoint, this.post.body(this.messageForm.value))
        .subscribe({
          next: (response) => {
            document.body.style.overflow = 'hidden';
            this.clearForm();
            this.isMailSent = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            setTimeout(() => {
              this.isMailSent = false;
              document.body.style.overflow = '';
            }, 3000)
          },

        });
    } else {
      Object.keys(this.messageForm.controls).forEach(field => {
        const control = this.messageForm.get(field);
        if (control?.invalid) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

  clearForm() {
    this.messageForm.reset();
  }


}

