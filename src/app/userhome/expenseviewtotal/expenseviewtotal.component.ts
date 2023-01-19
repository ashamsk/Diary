import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expenseviewtotal',
  templateUrl: './expenseviewtotal.component.html',
  styleUrls: ['./expenseviewtotal.component.scss']
})
export class ExpenseviewtotalComponent {
  uid:any
  DataArray:any
  total:any
  TrasfromedTime:any
  DArray:any=[]
  
  constructor(private datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendserviceService){
    this.uid=localStorage.getItem("uid")
  }
  ngOnInit(){
    this.backendservice.completeexpense(this.uid).subscribe((res) => {
      this.DataArray=res
      console.log(this.DataArray)
      
      var sum:number=0;
      this.DataArray.forEach((element: any) => {
        sum=sum+element.amount
        
         this.TrasfromedTime =this.datepipe.transform(element.date, 'EEEE, MMMM d, y');
    this.DArray.push(this.TrasfromedTime)
        this.total=sum;
      });
      })
      console.log(this.DArray)
    
    
  }
  del(eid:any)
  {
    this.backendservice.deleteexpense(eid);
    console.log(eid)
  }
}
