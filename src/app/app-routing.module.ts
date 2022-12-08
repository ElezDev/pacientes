import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarDComponent } from './vistas/dashboard/dashboard.component';
import { EditComponent } from './vistas/edit/edit.component';
import { LoguinComponent } from './vistas/loguin/loguin.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

const routes: Routes = [
  {path:'',redirectTo:'loguin',pathMatch:'full'},
  {path:'loguin', component:LoguinComponent},
  {path:'dashboard', component:DashboarDComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar/:id', component:EditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
