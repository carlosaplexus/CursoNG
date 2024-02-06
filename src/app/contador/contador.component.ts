import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  titulo:string = "Contador";
  numero:number = 0;

  Incrementar(){
    this.numero++;
  }

  Decrementar(){
    this.numero--;
  }
}
