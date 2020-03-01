import {Component, NgModule} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})

export class ContactFormComponent {
  contactForm;

  constructor(private formBuilder: FormBuilder, private client: HttpClient) {
    this.contactForm = this.formBuilder.group({
      content: '',
      telephone: '',
      email: '',
      name: ''
    });
  }

  onSubmit(customerData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.client.post('http://localhost:8000/api/contact', customerData, httpOptions).subscribe();
    this.contactForm.reset();
  }


}
