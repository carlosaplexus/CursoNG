import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {
  titulo:string = "Formulario Reactivo";

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  procesar(){
    console.log(this.formUser.value)
  }

  formUser = new FormGroup({
    "name": new FormControl("",Validators.required),
    "email": new FormControl("", [Validators.required,Validators.email])
  });

  // name = new FormControl("",Validators.required);
  // email = new FormControl("",[Validators.required,Validators.email]);
}
