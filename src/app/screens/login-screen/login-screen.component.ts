import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
declare var $ : any;


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
    public facadeService: FacadeService,
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
    this.errors = [];
  //validacion
    this.errors = this.facadeService.validarLogin(this.username, this.password);
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }
    //pasa la validacion
    this.router.navigate(["home"]);
   
  }
  
}
