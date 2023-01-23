import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expenseview',
  templateUrl: './expenseview.component.html',
  styleUrls: ['./expenseview.component.scss']
})
export class ExpenseviewComponent {
  submitted=false
  constructor(private datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendserviceService){
    this.uid=localStorage.getItem("uid")
  }
  DataArray:any
  TrasfromedTime:any
  uid:any
  total:any
  DArray:any=[]
  searchform=this.fb.group({
    datestart:['',[Validators.required]],
    dateend:['',[Validators.required]],
    uid:['']
  })
  onSubmit(){
    this.submitted=true
    if(this.searchform.invalid)
    {
      return
    }
this.backendservice.searchdate(this.searchform.value.datestart,this.searchform.value.dateend,this.uid).subscribe((res) => {
  this.DataArray=res
  console.log(this.DataArray)
  
  var sum:number=0
  this.DataArray.forEach((element: any) => {
    sum=sum+element.amount
     this.TrasfromedTime =this.datepipe.transform(element.date, 'EEEE, MMMM d, y');
this.DArray.push(this.TrasfromedTime)
    
    this.total=sum
  });
  })
  console.log(this.DArray)

console.log(this.searchform.value)
  }
  del(eid:any)
  {
    this.backendservice.deleteexpense(eid);
    console.log(eid)
  }
}
