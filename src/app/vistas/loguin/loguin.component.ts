import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { ApiService  } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/loguin.interface';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})


export class LoguinComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormGroup('', Validators.required),
    pasword: new FormGroup ('', Validators.required)
  })


constructor (private api:ApiService){}

ngOnInit(): void{

}
OnLogin(form:LoginI){
  this.api.loginByEmail(form).subscribe(data=>{
    console.log(data)
  })
}

 
}


