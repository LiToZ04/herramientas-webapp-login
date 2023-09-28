import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor
  (
  private validatorService : ValidatorService,
  private errorService:ErrorsService,
  ) 
  {}

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

  //funcion para validar
  public validarUsuario(data:any)
  {
    console.log("Validando usuario...", data);
    let error: any = [];
    if (!this.validatorService.required(data["matricula"]))
    {
      error["matricula"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["first_name"]))
    {
      error["first_name"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["last_name"]))
    {
      error["last_name"] = this.errorService.required;  
    }

    //email funcion compuesta
    if (!this.validatorService.required(data["email"]))
    {
      error["email"] = this.errorService.required;  
    }
    else if(!this.validatorService.max(data["email"],40))
    {
      error["email"] = this.errorService.max(40);
    }
    else if(!this.validatorService.email(data['email']))
    {
      error['email'] = this.errorService.email;
    }
    //fin funcion email

    if (!this.validatorService.required(data["password"]))
    {
      error["password"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["confirmar_password"]))
    {
      error["confirmar_password"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["fecha_nacimiento"]))
    {
      error["fecha_nacimiento"] = this.errorService.required;  
    }

    //curp funcion compuesta
    if (!this.validatorService.required(data["curp"]))
    {
      error["curp"] = this.errorService.required;  
    }
    else if(!this.validatorService.max(data["curp"],18))
    {
      error["curp"] = this.errorService.max(18);
      alert("La CURP debe tener 18 caracteres");
    }
    else if(!this.validatorService.min(data["curp"],18))
    {
      error["curp"] = this.errorService.min(18);
      alert("La CURP debe tener 18 caracteres");
    }
    //fin funcion curp

    //rfc funcion compuesta
    if (!this.validatorService.required(data["rfc"]))
    {
      error["rfc"] = this.errorService.required;  
    }
    else if(!this.validatorService.max(data["rfc"],12))
    {
      error["rfc"] = this.errorService.max(12);
      alert("El RFC debe tener 18 caracteres");
    }
    else if(!this.validatorService.min(data["rfc"],12))
    {
      error["rfc"] = this.errorService.min(12);
      alert("El RFC debe tener 12 caracteres");
    }
    //fin funcion rfc

    //edad funcion compuesta
    if (!this.validatorService.required(data["edad"]))
    {
      error["edad"] = this.errorService.required;  
    }
    else if (!this.validatorService.numeric(data["edad"])) 
    {
      alert("Escriba su edad con numeros");
    }
    //fin funcion edad

    if (!this.validatorService.required(data["telefono"]))
    {
      error["telefono"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["ocupacion"]))
    {
      error["ocupacion"] = this.errorService.required;  
    }

    return error;
  }

}
