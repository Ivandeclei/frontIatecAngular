import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, BtnComponent],
  providers:[
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private service: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmitForm() {
    if(this.loginForm.valid){
      this.service.sendData(this.loginForm.value.email, this.loginForm.value.password);
    }
  }
}
