import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KnowtifiedServiceService } from '../knowtified-service.service';
import { ContactFormRequest} from '../models/ContactFormRequest'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private service:KnowtifiedServiceService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email_address: ['', [Validators.required,Validators.email]],
      contact_number: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      street_name: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      pin_code: ['', [Validators.required]],
      district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      file_name: ['', [Validators.required]]
    });
  }

  submit() {
    let contactFormDetails:ContactFormRequest=this.contactForm.value;
    this.service.submitContactForm(contactFormDetails).subscribe((response)=>{
      alert('Form Submitted successfully')
    })
  }
  get getFormControl(){
    return this.contactForm.controls;
  }
}
