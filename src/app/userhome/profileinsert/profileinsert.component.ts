import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-profileinsert',
  templateUrl: './profileinsert.component.html',
  styleUrls: ['./profileinsert.component.scss']
})
export class ProfileinsertComponent {
  uid:any;
  // static flag:boolean=true
  Profiledataarray: any[]=[];
  // ProfileEditForm: FormGroup;

  constructor(private fb:FormBuilder,private backendservice:BackendserviceService,private route:ActivatedRoute){
this.uid=localStorage.getItem("uid")

  }

  ProfileEditForm=this.fb.group({
    // pid:[''],
    firstname:[''],
    lastname:[''],
    uid:[''],
    dob:[''],
    phno:[''],
    address:[''],
    pin:[''],
    idno:[''],
    dlno:[''],
    email:[''],
    education:[''],
    passno:[''],
    bano:[''],
    country:[''],
    state:['']
  })

  ngOnInit(): void {
    let uid=localStorage.getItem("uid")
  }

  OnSubmit()
  {
      this.backendservice.insertprofiledata(this.ProfileEditForm.value)
  }
}
