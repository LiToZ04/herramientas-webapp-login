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
  constructor
  (
    private router:Router,
  )
  {}

  ngOnInit():void{}

  //variable
  hide = true;

  //Metodo
  public goRegistro()
  {
    this.router.navigate(["registro"]);
  }
}
