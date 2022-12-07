import { Injectable } from '@angular/core';
 import {LoginI  } from '../../modelos/loguin.interface';
 import {ResponseI } from '../../modelos/response.interface';
 import { HttpClient,HttpHeaders } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string ="https://reqres.in/api/";

  constructor(private http:HttpClient) { }

loginByEmail(form:LoginI):Observable<ResponseI>{
let direccion =this.url + "users";
return this.http.post<ResponseI>(direccion ,form)
}

}
