import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RegistroProductoScreenComponent } from './screens/registro-producto-screen/registro-producto-screen.component';

const routes: Routes = 
[
  {path: '',component:LoginScreenComponent,pathMatch:'full'},
  {path: 'registro',component:RegistroScreenComponent,pathMatch:'full'},
  {path: 'home',component:HomeScreenComponent,pathMatch:'full'},
  {path: 'tarea', component:RegistroProductoScreenComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
