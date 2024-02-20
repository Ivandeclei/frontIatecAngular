import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN, URI_BASE } from './Constants';

interface EventResponse {
  id: string,
  participants: Array<Participant>,
  name: string,
  description: string,
  eventPlace: string,
  typeEvent: number,
  status: number,
  dateEvent: string,
}
interface Participant {
  name: string,
}
@Injectable({
  providedIn: 'root'
})
export class GetDataHomeService {

  private endpointUrl = URI_BASE +'/event';
  constructor(private http: HttpClient) { }
  getAll(
    DateEvent?: string, 
    HourEvent?: string, 
    EventName?: string, 
    Description?: string, 
    Day?:string, 
    Month?: string, 
    Week?: boolean, 
    PageNumber?:number, 
    PageSize?:number): Observable<any[]>{

      let params = new HttpParams();


      /**
       * Adicionar parametros para filtros
       */
    return this.http.get<EventResponse[]>(this.endpointUrl, {
      //params: {Description: '', DateEvent:'', EventName:'', HourEvent:'', Day: '', Month:'', Week: '', PageNumber: '', PageSize: ''},
      headers:{
        "Authorization": TOKEN
      }
    })
  }
}
