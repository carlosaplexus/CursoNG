import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  titulo:string = "Botones";
  texto_color:string = "";
  btn_desactiva:boolean = false;
}
