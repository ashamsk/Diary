import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public Loginstatus = false;
  isUserValid: boolean=false;
  LoginFormGroup:FormGroup;
  constructor(private fb: FormBuilder, private route: Router,private backendservice:BackendserviceService) { 
  this.LoginFormGroup = this.fb.group({
    username: [''],
    password: ['']
  })
}
  OnSubmit() {
    // if (this.LoginFormGroup.value.username == 'Admin' && this.LoginFormGroup.value.password == 'Admin') {
    //   this.route.navigate(['userhome'])
    // }
    // else {
    //   this.Loginstatus = true;
    //   this.backendservice.login([this.LoginFormGroup.value.username, this.LoginFormGroup.value.password]).subscribe(res => {
    //     console.log(res);
    //     console.log(this.LoginFormGroup.value.username)
    //     if (res == 'Failed') {
    //       this.isUserValid = false;
    //       alert('Login Unsuccessful');
    //     } else {
    //       this.isUserValid = true;
    //       alert('Login successful');
    //       this.route.navigate(['userhome'])
    //     }
    //   });
    // }
    
    this.Loginstatus = true;
      this.backendservice.login([this.LoginFormGroup.value.username, this.LoginFormGroup.value.password]).subscribe(res => {
        console.log(res);
        console.log(this.LoginFormGroup.value.username)
        console.log(this.LoginFormGroup.value.password)
        
        if (res == 'Failed') {
          this.isUserValid = false;
          alert('Login Unsuccessful');
        } else {
          this.isUserValid = true;
          alert('Login successful');
          console.log(res);
          let obj = JSON.parse(res);
          console.log(obj.uid);
          localStorage.setItem("name",obj.name);
          localStorage.setItem("uid",obj.uid);
          this.route.navigate(['userhome'])
        }
      });
  }
  }


