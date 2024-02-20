import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { GetDataHomeService } from '../../services/get-data-home.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  providers:[
    GetDataHomeService, DatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    /*@Input("date-event") DateEvent?:string;
    @Input("hour-event") HourEvent?:string;
    @Input("name-event") EventName?:string;
    @Input("description-event") Description?:string;*/
    @Input("day-event") Day?:string;
    @Input("month-event") Month?:string;
    @Input("week-event") Week?:boolean;
    @Input("page-number") PageNumber?:number ;
    @Input("page-size") PageSize?:number ;
    @Output("submit") onSubmit = new EventEmitter();

    /**
     * Possibilidade de remover dados acima 
     */
  
    filterForm!: FormGroup;

    eventsHome :any
      constructor(private service: GetDataHomeService, public datePipe: DatePipe) { 

        this.filterForm = new FormGroup({
          dateFilter: new FormControl(''),
          timeFilter: new FormControl(''),
          textFilter: new FormControl(''),
        });
      }

      onSubmitForm(): void{
      this.service.getAll(
        this.filterForm.value.dateFilter,
         this.filterForm.value.timeFilter,
         this.filterForm.value.EventName,
         this.filterForm.value.textFilter,
        /*this.Day,
        this.Month,
        this.Week,
        this.PageNumber,
        this.PageSize,*/
        ).subscribe(config => {
          console.log("config",config)
        this.eventsHome = config;
      });
    }

    /**
   * Verifica uma forma de passar os parametros via quary string para a rota do back  
   */
}
