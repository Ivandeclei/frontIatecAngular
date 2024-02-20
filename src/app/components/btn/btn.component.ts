import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


type  BtnVariants = "primary" | "secondary" | "delete"
@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input("btn-text") btnText:string = "";
  @Input() disabled:boolean = false;
  @Input() loading:boolean = false;
  @Input() variant:BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();
  
  onSubmitForm(){
    this.onSubmit.emit();
  }
  
}
