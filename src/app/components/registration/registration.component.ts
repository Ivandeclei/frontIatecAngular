import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';
import { RegisterService } from '../../services/register.service';
import { HeaderComponent } from '../header/header.component';
import { Console } from 'console';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, BtnComponent, HeaderComponent],
  providers:[
    RegisterService
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {


  registerForm!: FormGroup;

  constructor(private service: RegisterService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      
    });
  }

  onSubmitForm() {
    if(this.registerForm.valid){
      this.service.sendData( this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password );
    }
  }
}
