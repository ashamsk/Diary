import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expenseentry',
  templateUrl: './expenseentry.component.html',
  styleUrls: ['./expenseentry.component.scss']
})
export class ExpenseentryComponent {
  DataArray:any
  uid:any
  constructor(private fb:FormBuilder,private backendservice:BackendserviceService){
    this.uid=localStorage.getItem("uid")
  }
  // Entryform:any
  
  Entryform=this.fb.group({
    date:[''],
    amount:[''],
    category:[''],
    description:[''],
    uid:['']
    
  })
  onSubmit()
  {
    this.backendservice.insertexpense(this.Entryform.value)
console.log(this.Entryform.value)
  }
  ngOnInit()
  {
    this.backendservice.viewcategory(this.uid).subscribe((res) => {
    this.DataArray=res
    console.log(this.DataArray)
    })
  }
}
