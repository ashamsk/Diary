import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expenseview',
  templateUrl: './expenseview.component.html',
  styleUrls: ['./expenseview.component.scss']
})
export class ExpenseviewComponent {
  constructor(private datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendserviceService){
    this.uid=localStorage.getItem("uid")
  }
  DataArray:any
  TrasfromedTime:any
  uid:any
  total:any
  DArray:any=[]
  searchform=this.fb.group({
    datestart:[''],
    dateend:[''],
    uid:['']
  })
  onSubmit(){
this.backendservice.searchdate(this.searchform.value.datestart,this.searchform.value.dateend,this.uid).subscribe((res) => {
  this.DataArray=res
  console.log(this.DataArray)
  // console.log(this.DataArray.date)
  var sum:number=0
  this.DataArray.forEach((element: any) => {
    sum=sum+element.amount
     this.TrasfromedTime =this.datepipe.transform(element.date, 'EEEE, MMMM d, y');
this.DArray.push(this.TrasfromedTime)
    // console.log(this.TrasfromedTime)
    this.total=sum
  });
  })
  console.log(this.DArray)
// console.log(this.searchform.value.dateend)
// console.log(this.searchform.value.datestart)
console.log(this.searchform.value)
  }
}
