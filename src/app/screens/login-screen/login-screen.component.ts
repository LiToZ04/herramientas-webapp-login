import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})

export class LoginScreenComponent 
{
    //variable
    hide = true;
    public type: String = "password";
    public username: String = "";
    public password: String = "";
    public errors:any = {};

  constructor
  (
    private router:Router,
  )
  {}

  ngOnInit():void{}

  //Metodo
  public goRegistro()
  {
    this.router.navigate(["registro"]);
  }

  public goHome()
  {
      this.router.navigate(["tarea"]);
  }
}
