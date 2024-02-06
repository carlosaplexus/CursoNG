import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  titulo:string = "Formulario";
  enviado:boolean = false;

  Enviar(name:string){
    console.log(name);
    this.enviado = true;
  }
}
