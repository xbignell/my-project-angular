import {Component, NgModule} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../config.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})

export class ContactFormComponent {
  contactForm;
  submitUrl;

  constructor(private formBuilder: FormBuilder, private client: HttpClient, private config: ConfigService) {
    this.contactForm = this.formBuilder.group({
      textContent: '',
      telephone: '',
      email: '',
      name: ''
    });
  }

  onSubmit(customerData) {
    this.config.getConfig()
      .subscribe(data => {
        this.submitUrl = data['contactApiUrl'];
        this.launch(customerData);
      });
    this.contactForm.reset();
  }

  launch(customerData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.client.post(this.submitUrl, customerData, httpOptions).subscribe();
  }
}
