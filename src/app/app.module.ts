import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Componentes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
//Pantallas
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers:
  [

  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
