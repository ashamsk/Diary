import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

constructor(private fb:FormBuilder,private backendservice:BackendserviceService){}
UserRegisterForm=this.fb.group({
  name:[''],
  email:[''],
  password:['']
})
Onsubmit(){
  this.backendservice.insertuserdata(this.UserRegisterForm.value)
  //console.log(this.UserRegisterForm.value)
}
}
