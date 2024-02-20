import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN, URI_BASE } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private endpointUrl = URI_BASE+'/participant';
  constructor(private http: HttpClient, private router: Router) { }
  sendData(nameParticipant: string, email: string, password: string){
    const data = {participant: {name: nameParticipant}, email, password}
     this.http.post<any>(this.endpointUrl, data, {
      headers:{
        "Authorization": TOKEN
      }
     }).subscribe((response: any) =>{
      this.router.navigate(['/login'])
    });
  }
}

