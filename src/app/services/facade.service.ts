import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor
  (
    private validatorService : ValidatorService,
    private errorService:ErrorsService,
  ) 

  {}

  public validarLogin(username: String, password: String)
  {
    var data = 
    {
      "username": username,
      "password": password
    }

    console.log("Validando login... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["username"]))
    {
      error["username"] = this.errorService.required;
    }else if(!this.validatorService.max(data["username"], 40))
    {
      error["username"] = this.errorService.max(40);
    }else if (!this.validatorService.email(data['username'])) 
    {
      error['username'] = this.errorService.email;
    }

    if(!this.validatorService.required(data["password"]))
    {
      error["password"] = this.errorService.required;
    }
    return error;
  }

}
