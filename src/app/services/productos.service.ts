import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor
  (
  private validatorService : ValidatorService,
  private errorService:ErrorsService,
  ) 
  {}

  public esquemaProduct()
  {
    return{
      'id': '',
      'nombre_producto': '',
      'precio': '',
      'departaemnto': '',
    }
  }

  public validarProducto(data:any)
  {
    console.log("Validando producto...", data);
    let error: any = [];
    if (!this.validatorService.required(data["id"]))
    {
      error["id"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["nombre_producto"]))
    {
      error["nombre_producto"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["precio"]))
    {
      error["precio"] = this.errorService.required;  
    }

    if (!this.validatorService.required(data["departamento"]))
    {
      error["departamento"] = this.errorService.required;  
    }

    return error;
  }
 
}

