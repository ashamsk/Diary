import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairyentry',
  templateUrl: './dairyentry.component.html',
  styleUrls: ['./dairyentry.component.scss']
})
export class DairyentryComponent {
  currdate:any;
  uid:any;
  constructor(public datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendserviceService)
  {
    let currentDateTime =this.datepipe.transform((new Date), 'dd-MM-yyyy');
    this.currdate=currentDateTime;
    this.uid=localStorage.getItem("uid")
  }
  DiaryEntryForm = this.fb.group({title:[''],date: [''],description: [''],uid:['']})
  onSubmit()
  {
    console.log(this.DiaryEntryForm.value);
      this.backendservice.insertdiarydata(this. DiaryEntryForm.value)
  }
}
