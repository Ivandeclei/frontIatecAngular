import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URI_BASE } from './Constants';

interface LoginResponse {
  authenticated: boolean,
  token: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpointUrl = URI_BASE+'/login';
  constructor(private http: HttpClient) { }
  sendData(name: string, email:string) {
    const data = {name, email}
    let response = this.http.post<LoginResponse>(this.endpointUrl, data).subscribe((response: LoginResponse) =>{
      let token = response.token; 
      localStorage.setItem('token', token);
    });
    
  }
}
