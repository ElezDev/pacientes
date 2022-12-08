import { Injectable } from '@angular/core';
 import {LoginI  } from '../../modelos/loguin.interface';
 import {ResponseI } from '../../modelos/response.interface';
 import { HttpClient,HttpHeaders } from '@angular/common/http';
 import { listaPacientesI } from '../../modelos/listapacientesinterface';
 import { pacienteI } from '../../modelos/paciente.interface';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ="https://api.solodata.es/";

  constructor(private http:HttpClient) { }

loginByEmail(form:LoginI){
let direccion =this.url+"auth"
return this.http.post<ResponseI>(direccion ,form)
}

getallPacientes(page:number):Observable<listaPacientesI[]>{
  let direccion = this.url + "pacientes?page=" + page;
  return this.http.get<listaPacientesI[]>(direccion);
}

getSinglePacientes(id:any):Observable<pacienteI>{
  let direccion = this.url + "pacientes?id=" + id;

  return this.http.get<pacienteI>(direccion);

}

putpaceintes(form:pacienteI):Observable<ResponseI>{
  let direccion = this.url + "pacientes"
  return this.http.put<ResponseI>(direccion,form);
}

deletepaceintes(form:pacienteI):Observable<ResponseI>{
  let direccion = this.url + "pacientes"
let options={
  Headers : new HttpHeaders({
    'Content-type':'application/json'
  }),
  body:form
}

  return this.http.delete<ResponseI>(direccion,options);
}

}
