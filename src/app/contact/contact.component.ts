import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  
  onSubmit() {
    // Here you can handle the form submission, for example, logging the data
    console.log('Contact Form Submitted', this.contact);

    // Reset the form after submission if needed
    this.contact = { name: '', email: '', message: '' };
  }
}
