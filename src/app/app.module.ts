import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeadersComponent } from './plantillas/headers/headers.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { LoguinComponent } from './vistas/loguin/loguin.component';
import { DashboarDComponent } from './vistas/dashboar-d/dashboar-d.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditComponent } from './vistas/edit/edit.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    LoguinComponent,
    DashboarDComponent,
    NuevoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
