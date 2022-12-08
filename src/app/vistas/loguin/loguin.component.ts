import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { ApiService  } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/loguin.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../modelos/response.interface';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})


export class LoguinComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


constructor (private api:ApiService , private rouuter:Router){}

errorStatus:boolean = false;
errorMsj ="Datos incorrectos";

ngOnInit(): void{
this.checkLocalStorage
}

checkLocalStorage(){
if(localStorage.getItem("token")){
  this.rouuter.navigate(['dasboard']);
}



}


OnLogin(form:any){
  this.api.loginByEmail(form).subscribe(data=>{
  let dataResponse:ResponseI = data;
  if(dataResponse.status == "ok"){
    localStorage.setItem("token",dataResponse.result.token);
    this.rouuter.navigate(['dashboard']);
  }else{
    this.errorStatus = true;
    this.errorMsj = dataResponse.result.error_msg;
  }
  })

 
}
}

