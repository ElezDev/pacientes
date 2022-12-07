import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';


@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})


export class LoguinComponent{

  loginForm = new FormGroup( {
    usuario : new FormControl ("", Validators.required),
    password : new FormControl ("", Validators.required),
  })


constructor (){}

ngOnInit(): void{

}

onLogin(form: any){
  console.log(form)
}

 
}


