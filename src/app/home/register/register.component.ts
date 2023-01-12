import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  submitted=false
constructor(private fb:FormBuilder,private backendservice:BackendserviceService){}
UserRegisterForm=this.fb.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
})
Onsubmit(){
  this.submitted=true
    if(this.UserRegisterForm.invalid)
    {
      return
    }
  this.backendservice.insertuserdata(this.UserRegisterForm.value)
  //console.log(this.UserRegisterForm.value)
}
}
