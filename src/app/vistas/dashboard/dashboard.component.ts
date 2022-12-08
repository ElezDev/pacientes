import { Component, OnInit } from '@angular/core';
import { ApiService  } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { listaPacientesI  } from '../../modelos/listapacientesinterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboarDComponent implements OnInit{
 
  pacientes!: listaPacientesI[];
  constructor (private api:ApiService, private router:Router){}
  
  ngOnInit(): void{
    this.api.getallPacientes(1).subscribe(data=>{
      this.pacientes=data
    })
  
    }
    editarPaciente(id:any){
      this.router.navigate(['editar',id]);

    }
    NuevoPaciente(){
    this.router.navigate(['nuevo']);
    }

}
