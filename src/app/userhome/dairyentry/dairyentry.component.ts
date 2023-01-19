import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairyentry',
  templateUrl: './dairyentry.component.html',
  styleUrls: ['./dairyentry.component.scss']
})
export class DairyentryComponent {
  submitted=false
  currdate:any;
  uid:any;
  constructor(public datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendserviceService)
  {
    let currentDateTime =this.datepipe.transform((new Date), 'EEEE, MMMM d, y');
    this.currdate=currentDateTime;
    this.uid=localStorage.getItem("uid")
  }
  DiaryEntryForm = this.fb.group({title:['',[Validators.required]],date: [''],description: ['',[Validators.required]],uid:['']})
  onSubmit()
  {
    this.submitted=true
    if(this.DiaryEntryForm.invalid)
    {
      return
    }
    console.log(this.DiaryEntryForm.value);
      this.backendservice.insertdiarydata(this. DiaryEntryForm.value)
  }
}
