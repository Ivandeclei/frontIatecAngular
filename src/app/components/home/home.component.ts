import { Component, signal } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { GetDataHomeService } from '../../services/get-data-home.service';
import { DatePipe, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    providers:[
      GetDataHomeService, DatePipe
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [BtnComponent, HeaderComponent, CardComponent, DatePipe]
})

export class HomeComponent {
   eventsHome :any
    constructor(private service: GetDataHomeService, public datePipe: DatePipe) { }

  ngOnInit(): void{
  this.service.getAll().subscribe(config => {
    this.eventsHome = config;
  });

  
 }  
}
