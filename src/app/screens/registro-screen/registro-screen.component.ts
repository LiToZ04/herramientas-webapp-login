import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var $:any; //JQuery

@Component
({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})

export class RegistroScreenComponent implements OnInit
{
  //Variables
  public editar:boolean = false;
  public user: any = {};
  hide_1 :boolean = false;
  hide_2 :boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //detectar errores
  public errors:any = {};
  //datos persona
  public id: number | null = null;
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public rfc: string = '';
  public curp: string = '';
  public edad: number | null = null;
  public telefono: string = '';
  public ocupacion: string = '';
  public fechaNacimiento: any = null;

  constructor
  (
    private router:Router,
    private location: Location, //Este sirve si quiero regresar hacia la localizacion anterior
    private usuariosService:UsuariosService,
  )
  {}

  ngOnInit():void
  {
    this.user = this.usuariosService.esquemaUser();
    console.log("User: , this.user");
    
  }

  public regresar()
  {
    this.router.navigate([""]);
  }

 
  public ShowPassword()
  {
    if(this.inputType_1 == 'password')
    {
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else
    {
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public ShowPwdConfirmar()
  {
    if(this.inputType_2 == 'password')
    {
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else
    {
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  public inicializarUsuario() 
  {
    return {
      id: null,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      fechaNacimiento: '',
      curp: '',
      rfc: '',
      edad: null,
      telefono: '',
      ocupacion: '',
    };
  }

  public registrar()
  {
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }

    //validar que las contrasena sean iguales
    if(this.user.password== this.user.confirmar_password)
    {
      alert("ok");
      return true;
    }
    else
    {
      alert("Las contrasena deben ser iguales");
      this.user.password="";
      this.user.confirmar_password="";
    }
  }

  //Otra forma de varificar
  /*public isFormValid(): boolean 
  {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.confirmPassword.trim() !== '' &&
      this.rfc.trim() !== '' &&
      this.curp.trim() !== '' &&
      !!this.edad &&
      this.telefono.trim() !== '' &&
      this.ocupacion.trim() !== '' &&
      !!this.fechaNacimiento &&
      this.password === this.confirmPassword
    );
  }
 */
}
