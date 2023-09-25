import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})

export class RegistroScreenComponent 
{
  //Variables
  public editar:boolean = false;
  public user: any = {};

  constructor
  (
    private router:Router,
  )
  {}

  ngOnInit():void
  {
    this.user = this.esquemaUser();
    console.log("User: , this.user");
    
  }

  public regresar()
  {
    this.router.navigate([""]);
  }

  public esquemaUser()
  {
    return{
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': '',
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    }
  }
}
