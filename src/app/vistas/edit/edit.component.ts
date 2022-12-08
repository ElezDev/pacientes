
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { pacienteI } from '../../modelos/paciente.interface';
import { ApiService  } from '../../servicios/api/api.service';
import {  FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


constructor(private activerouter:ActivatedRoute,private router:Router, private api:ApiService){}

  datosPaciente!: pacienteI;
  
  editarform = new FormGroup({
  nombre : new FormControl(''),
  dni : new FormControl(''),
  direccion:new FormControl(''),
  codigoPostal: new FormControl(''),
  correo:new FormControl(''),
  genero:new FormControl(''),
  telefono:new FormControl(''),
  token: new FormControl(''),
  fechaNacimiento: new FormControl(''),
  pacienteId: new FormControl(''),

})

  ngOnInit(): void{
  
    let pacienteid=  this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSinglePacientes(pacienteid).subscribe(data=>{
      this.datosPaciente =data[0];
      this.editarform.setValue({
        'nombre':this.datosPaciente.Nombre,
        'dni':this.datosPaciente.DNI,
        'correo':this.datosPaciente.Correo,
        'direccion':this.datosPaciente.Direccion,
        'codigoPostal':this.datosPaciente.CodigoPostal,
        'genero':this.datosPaciente.Genero,
        'telefono':this.datosPaciente.Telefono,
        'fechaNacimiento':this.datosPaciente.FechaNacimiento,
        'token':token,
        'pacienteId':pacienteid,
      });
    

    })
    }
  getToken(){
    return localStorage.getItem("token")
  }

  postForm(form:any){
   this.api.putpaceintes(form).subscribe(data=>{
    console.log(data)
   })
  }
// eliminar(){
//  this.api.deletepaceintes
}

