import { Component } from '@angular/core';
import { Persona } from '../Modelos/persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  titulo:string = "Bucles";

  personas:Persona[] = [
    {nombre:"Juan", edad:20},
    {nombre:"Carlos", edad:49},
    {nombre:"Luis", edad:37},
    {nombre:"Pedro", edad:61},
  ];

}
