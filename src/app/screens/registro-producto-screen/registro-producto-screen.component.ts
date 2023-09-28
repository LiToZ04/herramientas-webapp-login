import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})

export class RegistroProductoScreenComponent 
{
  public errors:any = {};
  public producto: any = {};
  public editar:boolean = false;

  constructor
  (
  private productosService : ProductosService,
  private router:Router,
  ){}

  ngOnInit():void
  {
   this.producto = this.productosService.esquemaProduct();
   console.log('Producto: ',this.producto);
  }

  public regresar()
  {
    this.router.navigate([""]);
  }

  public registrar()
  {
    this.errors = [];

    this.errors = this.productosService.validarProducto(this.producto);
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }

  }
 

}
