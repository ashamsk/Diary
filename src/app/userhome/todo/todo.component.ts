import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  uid:any=localStorage.getItem("uid")
  status:any="not completed"
  DiaryEntryForm = this.fb.group({  task: [''],  status: [''],uid:['']  })
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
    //console.log(this.DiaryEntryForm.value);
    this.backendservice.inserttodo(this. DiaryEntryForm.value)
    // this.ngOnInit()
      // this.router.navigate(['app']);
  }
}
