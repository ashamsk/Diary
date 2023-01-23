import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private backendservice:BackendserviceService,private fb: FormBuilder){
    
  }
  Dataarray: any[]=[];
  submitted=false
  uid:any=localStorage.getItem("uid")
  status:any="not completed"
  DiaryEntryForm = this.fb.group({  task: ['',Validators.required],  status: [''],uid:['']  })
  ngOnInit()
  {
    let uid=localStorage.getItem("uid")
    this.backendservice.gettododata(uid).subscribe((res) => {
            this.Dataarray = res;
          console.log(res)
          })
  }

  OnSubmit()
  {
    this.submitted=true
    if(this.DiaryEntryForm.invalid)
    {
      return
    }
    //console.log(this.DiaryEntryForm.value);
    this.backendservice.inserttodo(this. DiaryEntryForm.value)
    
  }
}
