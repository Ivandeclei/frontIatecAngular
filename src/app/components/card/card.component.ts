import { Component, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


@Input("title-event") titleEvent:string = "";
@Input("description-event") descriptionEvent:string = "";
@Input("date-event") dateEvent:string = "";
@Input("type-event") typeEvent:string = "";
@Input("status-event") statusEvent:string = "";

}